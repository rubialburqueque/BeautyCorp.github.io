<template>
  <div class="home">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Body from '@/components/consultant/catalogue/Body.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
  },
};
</script>
<style>

</style>
