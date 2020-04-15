<template>
  <div>
    <input type="text" placeholder="nombre completo">
    <input type="text" placeholder="apellidos">
    <input type="text" v-model="email" placeholder="correo">
    <input type="password" v-model="password" placeholder="contraseña">
    <input type="text" placeholder="confirmar contraseña">
    <button @click="signIn()">Registrar</button>
  </div>
</template>

<script>
import { createCount } from '../firebase/function-firebase';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      // eslint-disable-next-line no-console
      console.log('ingrese');
      // eslint-disable-next-line no-console
      console.log(this.email);
      // eslint-disable-next-line no-console
      console.log(this.password);
      createCount(this.email, this.password)
        .then(() => {
          // eslint-disable-next-line no-alert
          alert('ingreso a la siguiente pagina');
          this.$router.push('/login');
        }).catch((error) => {
          this.error = error.message;
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>
