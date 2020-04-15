<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">login</router-link> |
      <router-link to="/register">Register</router-link> |
      <!-- <router-link to="/">{{signOut}}</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">

</style>
