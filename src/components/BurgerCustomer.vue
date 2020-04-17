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
                    <router-link class="nav-link" to="/home-catalogo">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/C-novedades">Novedades</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/C-offerts">Ofertas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/offices">Despacho</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/C-orders">Pedidos</router-link>
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
