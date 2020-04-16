<template>
  <div>
      <div class="text-center">
      <div class="container">
        <h2 class="h3 mb-3 font-weight-normal">Inicia Sesión</h2>
        <br>
        <br>
        <h6>Código de consultora</h6>
        <label class="sr-only">Email address</label>
        <input type="name" placeholder="usuario"
        id="inputEmail" class="form-control" v-model="email">
        <br>
        <h6>Contraseña</h6>
        <label class="sr-only">Password</label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="password">
        <br>
        <router-link to="/Recover-Password">¿Olvidaste tu contraseña?</router-link>
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block" @click="loginCount()">Iniciar Sesión
          </button>
        <br>
        <p>¿No tienes cuenta?  <span><router-link to="/register">Registrate</router-link></span></p>
        <WriteError v-bind:typeError="error"/>
        </div>
      </div>
    </div>
<!--     <h1>Inicia Sesión</h1>
    <label for="email">Código de consultora</label>
    <input type="text" v-model="email" placeholder="usuario">
    <label for="password">Contraseña</label>
    <input type="password" v-model="password" placeholder="contraseña">
    <router-link to="/Recover-Password">¿Olvidaste tu contraseña?</router-link>
    <button @click="loginCount()">Iniciar Sesión</button>
    <p>¿No tienes cuenta?  <span><router-link to="/register">Registrate</router-link></span></p>
    <WriteError v-bind:typeError="error"/> -->
  </div>
</template>

<script>
import { singIn } from '../firebase/function-firebase';
import WriteError from './Error.vue';

export default {
  name: 'Login',
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
      if (this.email === '' || this.email === '') {
        this.error = 'Es necesario que todo los cuadro esten completos';
      } else {
        singIn(this.email, this.password)
          .then(() => {
            this.$router.push('/home');
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
      }
    },
  },
};
</script>
