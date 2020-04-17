<template>
  <div class="home">
<!--     <Burger/> -->
    <Header/>
    <Body/>
  </div>
</template>

<script>
/* import Burger from '@/components/consultant/catalogue/Burger.vue'; */
import Header from '@/components/Header.vue';
import Body from '@/components/consultant/catalogue/Body.vue';

export default {
  name: 'Home',
  components: {
  /*     Burger, */
    Header,
    Body,
  },
};
</script>
<style>

</style>
