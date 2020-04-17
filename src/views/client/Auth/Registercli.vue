<template>
    <div>
        <Burger/>
        <Header/>
        <Datos/>
    </div>
</template>

<script>
import Datos from '@/components/client/Datos.vue';
import Header from '@/components/Header.vue';
import Burger from '@/components/Burger.vue';

export default {
  name: 'RegisterCli',
  components: {
    Datos,
    Header,
    Burger,
  },
};
</script>
