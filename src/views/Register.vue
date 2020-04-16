<template>
  <div>
    <h2 class="h3 mb-3 font-weight-normal">Regístrate</h2>
    <form class="form-signin" action="" @submit="checkForm">
      <CompRegister/>
    </form>
  </div>
</template>

<script>
import CompRegister from '../components/Register.vue';

export default {
  name: 'Register',
  components: {
    CompRegister,
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
