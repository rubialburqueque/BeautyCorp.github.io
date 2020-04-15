<template>
    <nav>
        <ul>
            <li>
                <router-link @click="SignOut">Cerrar Sesión</router-link>
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
