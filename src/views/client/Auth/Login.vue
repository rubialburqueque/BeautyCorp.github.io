<template>
    <div>
        <LoginCustomer/>
    </div>
</template>

<script>
import LoginCustomer from '@/components/client/LoginCustomer.vue';

export default {
  name: 'LoginCli',
  components: {
    LoginCustomer,
  },
  created() {
    this.$store.dispatch('bindconsulter');
  },
};
</script>
