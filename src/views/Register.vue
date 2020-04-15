<template>
    <form action="" @submit="checkForm">
      <CompRegister/>
    </form>
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
