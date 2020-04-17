<template>
  <div class="home">
    <HeaderBurger/>
    <ListCLients/>
  </div>
</template>

<script>
import HeaderBurger from '@/components/HeaderBurger.vue';
import ListCLients from '@/components/consultant/orders/ListClients.vue';

export default {
  name: 'Clients',
  components: {
    HeaderBurger,
    ListCLients,
  },
  created() {
    this.$store.dispatch('bindClientes');
  },
};
</script>
<style>

</style>
