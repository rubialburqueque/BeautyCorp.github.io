<template>
  <div class="home">
    <Header/>
    <Body/>
    <Login/>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
import Login from './Login.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Login,
  },
};
</script>
<style>

</style>
