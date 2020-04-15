<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reset">Reset Password</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");

</style>
