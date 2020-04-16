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
          <h8>Correo Electrónico o código de consultora</h8>
          <label class="sr-only">Email address</label>
          <input type="email,name" placeholder="claufer56@gmail.com o claudia127"
          id="inputEmail" class="form-control" v-model="email" required="" autofocus="">
          <br>
          <div class="checkbox mb-3">
            <button class="btn btn-lg btn-primary btn-block">ENVIAR CORREO
            </button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Reset',
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
