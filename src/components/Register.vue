<template>
<div class="text-center">
      <div class="container">
        <br>
        <h6>Nombres</h6>
        <label class="sr-only">Name</label>
        <input type="texto" placeholder="nombre completo"
        id="inputEmail" class="form-control" v-model="completeName">
        <br>
        <h6>Apellidos</h6>
        <label class="sr-only">LastName</label>
        <input type="texto" placeholder="Apellidos"
        id="inputEmail" class="form-control" v-model="lastName">
        <br>
        <h6>Correo Electrónico</h6>
        <label class="sr-only">Email address</label>
        <input type="texto" placeholder="correo@correo.com"
        id="inputEmail" class="form-control" v-model="email">
        <br>
        <h6>Teléfono</h6>
        <label class="sr-only">Movilphone</label>
        <input type="texto" placeholder="celular"
        id="inputEmail" class="form-control" v-model="phone">
        <br>
        <h6>Contraseña</h6>
        <label class="sr-only">Password</label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="password">
        <br>
        <h6>Confirmar contraseña</h6>
        <label class="sr-only">PasswordOk</label>
        <input type="password"
        id="inputPassword" class="form-control" v-model="confirmPassword">
        <br>
        <div class="checkbox mb-3">
        <label>
        <input type="checkbox" v-model="termsAndCoditions"> He leido y acepto
        <span><router-link to="/termsAndCoditions">términos y condiciones</router-link></span> y las
          politicas de uso de datos personales
        </label>
        </div>
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block" @click="signIn()">Registrarse
          </button>
        <br>
        <p>¿Ya tienes cuenta? <span><router-link to="/login">Iniciar Sesión</router-link></span></p>
         <WriteError v-bind:typeError="error"/>
        </div>
      </div>
    </div>
 <!--  <div>
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
    <input type="checkbox" name="termsAndCoditions" v-model="termsAndCoditions">
    <p>
      He leído y acepto
      <span><router-link to="/termsAndCoditions">términos y condiciones</router-link></span>
       y las políticas de uso de datos personales
    </p>
    <button @click="signIn()">Registrar</button>
    <p>¿Ya tienes cuenta? <span><router-link to="/login">Iniciar Sesión</router-link></span></p>
    <WriteError v-bind:typeError="error"/>
  </div> -->
</template>

<script>
import { createCount, newConsulter } from '../firebase/function-firebase';
import WriteError from './Error.vue';

export default {
  name: 'Register',
  components: {
    WriteError,
  },
  data() {
    return {
      email: '',
      password: '',
      completeName: '',
      lastName: '',
      phone: '',
      confirmPassword: '',
      termsAndCoditions: null,
      error: '',
    };
  },
  methods: {
    signIn() {
      // eslint-disable-next-line no-console
      console.log('selected', this.termsAndCoditions);
      if (this.completeName === '' || this.lastName === '' || this.email === '' || this.phone === '' || this.password === '' || this.confirmPassword === '' || this.termsAndCoditions == null) {
        this.error = 'Es necesario que todo los cuadros esten completos';
      } else {
        createCount(this.email, this.password)
          .then(() => {
            this.$router.push('/login');
            newConsulter(this.completeName, this.lastName, this.email, this.phone);
          }).catch((err) => {
          // eslint-disable-next-line no-console
            console.log(err);
            if (err.code === 'auth/weak-password') {
              this.error = 'Contraseña no cuenta con los caracteres mínimos permitidos (min 6 carácteres)';
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
