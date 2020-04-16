<template>
  <div class="home">
    <Header/>
    <Body/>
    <MagazineView/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
import MagazineView from '@/components/consultant/catalogue/MagazineViews.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    MagazineView,
  },
};
</script>
<style>

</style>