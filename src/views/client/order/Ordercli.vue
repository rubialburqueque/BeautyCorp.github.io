<template>
    <div>
        <Header/>
        <ComponentOrdercli/>
    </div>
</template>

<script>
import ComponentOrdercli from '@/components/client/order/Ordercli.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Ordercli',
  created() {
    this.$store.dispatch('bindEsika');
  },
  components: {
    ComponentOrdercli,
    Header,
  },
};
</script>
