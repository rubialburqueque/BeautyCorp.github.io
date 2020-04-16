<template>
  <div>
    <form action="" @submit="checkForm">
      <label for="">Codigo de consultora o correo electrónico</label>
      <input type="text" v-bind="email" >
      <button>ENVIAR CORREO</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SendEmail',
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
