<template>
    <div>
        <Header/>
        <Datos/>
    </div>
</template>

<script>
import Datos from '@/components/client/Datos.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'RegisterCli',
  components: {
    Datos,
    Header,
  },
};
</script>
