<template id="navBar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light"
    v-bind:class=" { 'navbarOpen': show }">
        <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
        id="navbarSupportedContent" v-bind:class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/catalogue">Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/products">Productos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/ordercli">Mis Pedidos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/logincli">Salir</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'Burger',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>

<style>

</style>
