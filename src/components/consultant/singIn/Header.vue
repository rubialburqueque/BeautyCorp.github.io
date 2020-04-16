<template>
  <div>
    <router-link @click="signOff">Cerrar Sesión</router-link>
</div>
</template>

<script>
import signOff from '@/firebase/function-firebase';

export default {
  name: 'Header',
  methods: {
    signOff() {
      signOff()
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>
