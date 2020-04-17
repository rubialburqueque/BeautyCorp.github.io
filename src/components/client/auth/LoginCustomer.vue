<template>
  <div>
      <div class="text-center">
      <div class="container">
        <h2 class="h3 mb-3 font-weight-normal">Inicia Sesión</h2>
        <br>
        <br>
        <h6>Ingresa el código de consultora</h6>
        <label class="sr-only"></label>
        <input type="text" placeholder="J2807" v-model="code"
        id="inputEmail" class="form-control">
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block" @click="login()">Ingresar
          </button>
        <br>
        <WriteError v-bind:typeError="error"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDataPersonal } from '@/firebase/function-firebase';
import WriteError from '@/components/Error.vue';

export default {
  name: 'ComponentLoginCLi',
  components: {
    WriteError,
  },
  data() {
    return {
      code: '',
      error: '',
    };
  },
  methods: {
    login() {
      if (this.code === '') {
        this.error = 'Es necesario que todo los cuadro esten completos';
      } else {
        getDataPersonal()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.data().code === this.code) {
                this.$store.dispatch('getName', doc.data().name);
                this.$router.push('/catalogue');
              } else {
                this.error = 'El código ingresado es incorrecto';
              }
            });
          });
      }
    },
  },
};
</script>
