<template>
  <div class="home">
    <Header/>
    <ComponentProduct/>
  </div>
</template>

<script>
import ComponentProduct from '@/components/client/catalogue/Products.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Products',
  components: {
    ComponentProduct,
    Header,
  },
};
</script>
<style>

</style>
