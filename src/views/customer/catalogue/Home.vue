<template>
  <div class="home">
    <Header/>
    <MagazineView/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import MagazineView from '@/components/consultant/catalogue/MagazineViews.vue';

export default {
  name: 'Home',
  components: {
    Header,
    MagazineView,
  },
};
</script>
<style>

</style>
