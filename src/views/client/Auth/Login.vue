<template>
    <div>
      <Header/>
      <LoginCustomer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import LoginCustomer from '@/components/client/auth/LoginCustomer.vue';

export default {
  name: 'LoginCli',
  components: {
    Header,
    LoginCustomer,
  },
  created() {
    this.$store.dispatch('bindconsulter');
  },
};
</script>
