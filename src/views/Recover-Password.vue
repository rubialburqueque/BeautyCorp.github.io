<template>
    <div>
        <h1>Restablecimiento de Contraseña</h1>
        <p>
            Pon tu código de consultora Beautycorp, o la dirección de correo electrónico
            que usaste para registrarte. Te enviaremos un correo con un enlace para reestablecer
            tu contraseña.
        </p>
        <SendEmail/>
    </div>
</template>

<script>
import SendEmail from '../components/sendEmail.vue';

export default {
  name: 'Recover-Password',
  components: {
    SendEmail,
  },
};
</script>
