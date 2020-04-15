<template>
  <form action="" @submit="checkForm">
    <label for="">Codigo de consultora o correo electrónico</label>
    <input type="text" v-bind="email" >
    <button>ENVIAR CORREO</button>
  </form>
</template>

<script>
export default {
  name: 'Sended-Email',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
    },
    sendEmail() {
      // eslint-disable-next-line no-console
      console.log('mando email');
    },
  },
};
</script>
