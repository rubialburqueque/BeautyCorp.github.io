<template>
  <div class="home">
    <Header/>
    <ComponentProduct/>
  </div>
</template>

<script>
import ComponentProduct from '@/components/client/catalogue/Products.vue';
import Header from '@/components/HeaderCli.vue';

export default {
  name: 'Products',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentProduct,
    Header,
  },
};
</script>
<style>

</style>
