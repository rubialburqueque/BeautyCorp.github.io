<template>
<div class="text-center">
      <div class="container">
        <form class="form-signin" action="" @submit="checkForm"></form>
        <h2 class="h3 mb-3 font-weight-normal">Regístrate</h2>
        <br>
        <h6>Nombres</h6>
        <label class="sr-only"></label>
        <input type="name" placeholder="Claudia Fernanda"
        id="inputEmail" class="form-control" required="" autofocus="">
        <br>
        <h6>Apellidos</h6>
        <label class="sr-only"></label>
        <input type="name" placeholder="Ramos Ochoa"
        id="inputEmail" class="form-control" required="" autofocus="">
        <br>
        <h6>Correo Electrónico</h6>
        <label class="sr-only"></label>
        <input type="email" placeholder="claufer56@gmail.com"
        id="inputEmail" class="form-control" v-model="email" required="" autofocus="">
        <br>
        <h6>Teléfono</h6>
        <label class="sr-only"></label>
        <input type="name" placeholder="998 045 658"
        id="inputEmail" class="form-control"  required="" autofocus="">
        <br>
        <h6>Contraseña</h6>
        <label class="sr-only"></label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="password" required="">
        <br>
        <h6>Confirmar contraseña</h6>
        <label class="sr-only"></label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="passwordOK" required="">
        <br>
        <div class="checkbox mb-3">
        <label>
        <input type="checkbox" value="remember-me"> He leido y acepto
        <a class="text-muted" href="#">Terminos y condiciones</a> y las
        <a class="text-muted" href="#">politicas de uso de datos personales</a>
        </label>
        </div>
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block" @click="signIn()">Registrarse
          </button>
        <br>
        <label>¿Ya tienes cuenta? <a class="text-muted" href="#">INICIAR SESSIÓN</a></label>

          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>
    </div>
</template>

<script>
/* import SignIn from '../components/SignIn/SignIn'; */
import db from '../firebase/db';
import 'firebase';

export default {
  name: 'Register',
  /*   components: {
     SignIn }, */
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
    },
    signIn() {
      // eslint-disable-next-line no-console
      console.log('ingrese');
      // eslint-disable-next-line no-console
      console.log(this.email);
      // eslint-disable-next-line no-console
      console.log(this.password);
      db.auth().createUserWithEmailAndPassword(this.email, this.password)
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
