<template>
  <button @click="loginCount()">Ingresar</button>
</template>

<script>
import db from '@/firebase/init';
import 'firebase';

export default {
  name: 'SignIn',
  methods: {
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
