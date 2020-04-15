<template>
    <form action="" @submit="checkForm">
        <CompSingIn/>
    </form>
</template>
<script>
import CompSingIn from '../components/Login.vue';

export default {
  name: 'Login',
  components: {
    CompSingIn,
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
.text-center {
    text-align: center !important
  };
.form-signin {
    width: 50px;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    };
</style>
