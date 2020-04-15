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
    <WriteError v-bind:typeError="error"/>
  </div>
</template>

<script>
import { singIn } from '../firebase/function-firebase';
import WriteError from './Error.vue';

export default {
  name: 'SignIn',
  components: {
    WriteError,
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    loginCount() {
      singIn(this.email, this.password)
        .then(() => {
          this.$router.push('/welcome');
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          if (err.code === 'auth/wrong-password') {
            this.error = 'La contraseña ingresada es incorrecta';
          }
          if (err.code === 'auth/invalid-email') {
            this.error = 'El correo ingresado es incorrecto';
          }
          if (err.code === 'auth/email-already-in-use') {
            this.error = 'La cuenta ya existe';
          }
          if (err.code === 'auth/app-not-authorized') {
            this.error = 'La contraseña no es correcta';
          }
        });
    },
  },
};
</script>
