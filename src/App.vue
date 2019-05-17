<template>
  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');

html, body {
  font-family: 'Work Sans', sans-serif !important; 
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
