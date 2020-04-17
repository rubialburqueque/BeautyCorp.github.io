<template>
  <div class="Offers">
    <Offers/>
  </div>
</template>

<script>
import Offers from '@/components/consultant/catalogue/Offers.vue';

export default {
  name: 'Offers',
  created() {
    this.$store.dispatch('bindOffers');
  },
  components: {
    Offers,
  },
};
</script>
<style>

</style>