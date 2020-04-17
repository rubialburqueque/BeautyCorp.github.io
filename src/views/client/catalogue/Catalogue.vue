<template>
  <div class="home">
    <Burger/>
    <Header/>
    <ComponentCatalogue/>
  </div>
</template>

<script>
import ComponentCatalogue from '@/components/client/catalogue/Catalogue.vue';
import Header from '@/components/Header.vue';
import Burger from '@/components/Burger.vue';

export default {
  name: 'Products',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentCatalogue,
    Header,
    Burger,
  },
};
</script>
<style>

</style>
