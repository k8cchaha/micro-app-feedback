import fs from 'fs-extra';
import path from 'path';

const indexPath = path.join(process.cwd(), 'dist', 'index.html');
const notFoundPath = path.join(process.cwd(), 'dist', '404.html');

// 重定向脚本
const redirectScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname !== '/') {
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
  }
});
</script>
`;

fs.readFile(indexPath, 'utf8')
  .then(contents => {
    const updatedContents = contents.replace('</head>', `${redirectScript}</head>`);
    return fs.writeFile(notFoundPath, updatedContents);
  })
  .then(() => {
    console.log('404.html created successfully!');
  })
  .catch(err => {
    console.error('Error creating 404.html:', err);
  });