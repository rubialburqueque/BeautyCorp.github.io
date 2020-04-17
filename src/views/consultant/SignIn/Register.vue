<template>
  <div class="text-center">
    <Header/>
    <h2 class="h3 mb-3 font-weight-normal">Regístrate</h2>
    <form class="form-signin" action="" @submit="checkForm">
      <CompRegister/>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CompRegister from '@/components/consultant/singIn/Register.vue';

export default {
  name: 'Register',
  components: {
    CompRegister,
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
.register{
  text-align: center;
};
::-webkit-input-placeholder {
   text-align: center;
}
</style>
