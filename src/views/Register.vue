<template>

<div class="text-center">
  <CompRegister/>
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
