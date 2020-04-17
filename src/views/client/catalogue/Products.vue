<template>
  <div class="home">
    <Burger/>
    <Header/>
    <ComponentProduct/>
  </div>
</template>

<script>
import ComponentProduct from '@/components/client/catalogue/Products.vue';
import Header from '@/components/Header.vue';
import Burger from '@/components/Burger.vue';

export default {
  name: 'Products',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentProduct,
    Header,
    Burger,
  },
};
</script>
<style>

</style>
