<template>
    <div class="text-center">
       <Header/>
      <div class="container">
          <form class="form-signin" action="" @submit="checkForm"></form>
          <h2 class="h3 mb-3 font-weight-normal">Restablecimiento de contraseña</h2>
          <br>
          <h6>Pon tu código de consultora Beautycorp, o la dirección de correo electrónico
              que usaste para registrarte. Te enviaremos un correo con un enlace para
              reestablecer tu contraseña</h6>
          <br>
          <SendEmail/>
          <br>
          <router-link to="/">Volver</router-link
          >
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SendEmail from '@/components/consultant/singIn/SendEmail.vue';

export default {
  name: 'Reset',
  components: {
    SendEmail,
    Header,
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
::-webkit-input-placeholder {
   text-align: center;
};
</style>
