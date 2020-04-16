<template>
  <div>
    <Header/>
    <form action="" @submit="checkForm">
        <ComponentLogin/>
    </form>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import ComponentLogin from '@/components/consultant/singIn/Login.vue';

export default {
  name: 'Login',
  components: {
    ComponentLogin,
    Header,
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
