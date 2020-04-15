<template>
  <div>
    <h1>Inicia Sesión</h1>
    <label for="email">Código de consultora</label>
    <input type="text" v-model="email" placeholder="usuario">
    <label for="password">Contraseña</label>
    <input type="password" v-model="password" placeholder="contraseña">
    <router-link to="/recover-pasword">¿Olvidaste tu contraseña?</router-link>
    <button @click="loginCount()">Iniciar Sesión</button>
    <p>¿No tienes cuenta?  <span><router-link to="/register">Registrate</router-link></span></p>
  </div>
</template>

<script>
import { singIn } from '../firebase/function-firebase';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    loginCount() {
      singIn(this.email, this.password)
        .then(() => {
          this.$router.push('/welcome');
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>
