<template>
  <div class="home">
    <HeaderBurger/>
    <Body/>
  </div>
</template>

<script>
/* import Burger from '@/components/consultant/catalogue/Burger.vue'; */
import HeaderBurger from '@/components/HeaderBurger.vue';
import Body from '@/components/consultant/catalogue/Body.vue';

export default {
  name: 'Home',
  components: {
  /*     Burger, */
    HeaderBurger,
    Body,
  },
};
</script>
<style>

</style>
