<template>
    <div>
      <button @click="loginCount()">Ingresar</button>
    </div>
</template>

<script>
import db from '@/firebase/db';
import 'firebase';

export default {
  name: 'Login',
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
