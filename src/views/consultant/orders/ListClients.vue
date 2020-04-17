<template>
  <div class="home">
    <ListClients/>
  </div>
</template>

<script>
import ListClients from '@/components/consultant/orders/ListClients.vue';

export default {
  name: 'ListCLients',
  created() {
    this.$store.dispatch('bindClientes');
  },
  components: {
    ListCLients,
  },
};
</script>
<style>

</style>
