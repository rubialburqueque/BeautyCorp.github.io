<template>
    <div class="text-center">
      <div class="container">
          <form class="form-signin" action="" @submit="checkForm"></form>
          <h2 class="h3 mb-3 font-weight-normal">Restablecimiento de contraseña</h2>
          <br>
          <h6>Pon tu código de consultora Beautycorp, o la dirección de correo electrónico
              que usaste para registrarte. Te enviaremos un correo con un enlace para
              reestablecer tu contraseña</h6>
          <br>
          <SendEmail/>
      </div>
    </div>
</template>

<script>
import SendEmail from '@/components/consultant/singIn/SendEmail.vue';

export default {
  name: 'Reset',
  components: {
    SendEmail,
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
