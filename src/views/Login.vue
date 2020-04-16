<template>
    <form action="" @submit="checkForm">
        <ComponentLogin/>
    </form>
</template>
<script>
import ComponentLogin from '../components/Login.vue';

export default {
  name: 'Login',
  components: {
    ComponentLogin,
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
