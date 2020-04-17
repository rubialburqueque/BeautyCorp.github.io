<template>
    <div>
        <Burger/>
        <Header/>
        <ComponentOrdercli/>
    </div>
</template>

<script>
import ComponentOrdercli from '@/components/client/order/Ordercli.vue';
import Header from '@/components/Header.vue';
import Burger from '@/components/Burger.vue';

export default {
  name: 'Ordercli',
  components: {
    ComponentOrdercli,
    Header,
    Burger,
  },
};
</script>
