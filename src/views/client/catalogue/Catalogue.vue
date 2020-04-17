<template>
  <div class="home">
    <ComponentCatalogue/>
  </div>
</template>

<script>
import ComponentCatalogue from '@/components/client/catalogue/Catalogue.vue';

export default {
  name: 'Products',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentCatalogue,
  },
};
</script>
<style>

</style>
