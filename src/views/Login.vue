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
