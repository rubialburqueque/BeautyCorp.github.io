<template>
  <div class="text-center">
    <h2 class="h3 mb-3 font-weight-normal">
        Bienvenida {{ this.$store.state.name }}</h2>
    <MagazineView/>
    <Offerts/>
  </div>
</template>

<script>
import MagazineView from './MagazineViews.vue';
import Offerts from './Offers.vue';

export default {
  name: 'Body',
  components: {
    MagazineView,
    Offerts,
  },
  data() {
    return {
      nameCosult: '',
    };
  },
  methods: {
  },
};
</script>

<style>
.text-center {
  text-align: center !important
};
</style>
