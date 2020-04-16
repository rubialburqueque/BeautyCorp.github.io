<template>
  <form action="" @submit="checkForm">
    <h8>Correo Electrónico o código de consultora</h8>
    <label class="sr-only">Email address</label>
    <input type="email,name" placeholder="claufer56@gmail.com o claudia127"
        id="inputEmail" class="form-control" v-model="email" required="" autofocus="">
    <br>
    <div class="checkbox mb-3">
      <button class="btn btn-lg btn-primary btn-block">ENVIAR CORREO</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SendEmail',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
    },
    sendEmail() {
      // eslint-disable-next-line no-console
      console.log('mando email');
    },
  },
};
</script>
