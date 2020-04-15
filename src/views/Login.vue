<template>
    <form action="" @submit="checkFormL">
        <input type="text" v-model="email" placeholder="usuario">
        <input type="password" v-model="password" placeholder="contraseña">
        <button @click="loginCount()">Ingresar</button>
    </form>
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
