<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/app1">App 1</router-link></li>
        <li><router-link to="/app2">App 2</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-color: #333;
  padding: 10px;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}
nav ul li {
  margin: 0 10px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
nav ul li a:hover {
  text-decoration: underline;
}
</style>
