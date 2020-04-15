<template>
  <div class="text-center">
      <div class="container">
        <form class="form-signin" action="" @submit="checkFormL"></form>
        <h2 class="h3 mb-3 font-weight-normal">Inicia Sesión</h2>
        <br>
        <br>
        <h6>Código de consultora</h6>
        <label class="sr-only">Email address</label>
        <input type="name" placeholder="claudia127"
        id="inputEmail" class="form-control" v-model="email" required="" autofocus="">
        <br>
        <h6>Contraseña</h6>
        <label class="sr-only">Password</label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="password" required="">
        <br>
        <label>¿Olvidaste tu contraseña?</label>
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block" @click="loginCount()">Iniciar Sesión
          </button>
        <br>
        <label>¿No tienes cuenta? <a class="text-muted" href="#">REGÍSTRATE</a></label>
        </div>
      </div>
    </div>
</template>
<script>
import db from '../firebase/db';
import 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    checkFormL(e) {
      e.preventDefault();
    },
    loginCount() {
      db.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // eslint-disable-next-line no-alert
          alert('para a la siguiente pagina');
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
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
