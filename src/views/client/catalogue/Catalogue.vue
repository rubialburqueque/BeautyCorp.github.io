<template>
  <div class="home">
    <Header/>
    <ComponentCatalogue/>
  </div>
</template>

<script>
import ComponentCatalogue from '@/components/client/catalogue/Catalogue.vue';
import Header from '@/components/HeaderCli.vue';

export default {
  name: 'Products',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentCatalogue,
    Header,
  },
};
</script>
<style>

</style>
