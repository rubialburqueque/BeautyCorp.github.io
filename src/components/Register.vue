<template>
  <div>
    <label for="completeName">Nombres</label>
    <input type="text" v-model="completeName" placeholder="nombre completo">
    <label for="lastName">Apellidos</label>
    <input type="text" v-model="lastName" placeholder="apellidos">
    <label for="email">Correo electrónico</label>
    <input type="text" v-model="email" placeholder="correo">
    <label for="phone">Celular</label>
    <input type="text" v-model="phone" placeholder="contraseña">
    <label for="password">Contraseña</label>
    <input type="password" v-model="password" placeholder="contraseña">
    <label for="confirmPassword">Confirmar contraseña</label>
    <input type="text" v-model="confirmPassword" placeholder="confirmar contraseña">
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
      completeName: '',
      lastName: '',
      phone: '',
      confirmPassword: '',
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
