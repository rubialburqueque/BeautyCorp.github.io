<template>
<div>hola desde body
  <Products/>
 </div>
</template>

<script>
import Products from './client/catalogue/Products.vue';

export default {
  name: 'Body',
  components: {
    Products,
  },
};
</script>

<style>

</style>
