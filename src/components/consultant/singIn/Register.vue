<template>
<div class="text-center">
      <div class="container">
        <br>
        <h6>Nombres</h6>
        <label class="sr-only">Name</label>
        <input type="texto" placeholder="Claudia"
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
        <h6>Código</h6>
        <label class="sr-only">Code</label>
        <input type="text"
        id="code" class="form-control" v-model="code">
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
        <p>¿Ya tienes cuenta? <span><router-link to="/">Iniciar Sesión</router-link></span></p>
         <WriteError v-bind:typeError="error"/>
        </div>
      </div>
    </div>
</template>

<script>
import { createCount, newConsulter } from '@/firebase/function-firebase';
import WriteError from '@/components/Error.vue';

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
      code: '',
    };
  },
  methods: {
    signIn() {
      // eslint-disable-next-line no-console
      console.log('selected', this.termsAndCoditions);
      if (this.completeName === '' || this.lastName === '' || this.email === '' || this.phone === '' || this.password === '' || this.confirmPassword === '' || this.termsAndCoditions == null || this.code === '') {
        this.error = 'Es necesario que todo los cuadros esten completos';
      } else {
        createCount(this.email, this.password)
          .then(() => {
            newConsulter(this.completeName, this.lastName, this.email, this.phone, this.code);
            const storeData = {
              name: this.completeName,
              lastname: this.lastName,
              email: this.email,
              phone: this.phone,
              code: this.code,
            };
            this.$router.push('/');
            this.$store.dispatch('savedata', storeData);
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
