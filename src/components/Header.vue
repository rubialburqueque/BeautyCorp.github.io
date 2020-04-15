<template>
    <nav>
        <ul>
            <li>
                <router-link @click="signOut" to="/login">Cerrar Sesión</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    signOut() {
      // eslint-disable-next-line no-console
      console.log('salir de sesion');
    },
  },
};
</script>
