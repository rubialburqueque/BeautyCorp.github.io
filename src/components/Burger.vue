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
                    <router-link class="nav-link" to="/home">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/points">Mis Puntos</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/clients">Pedidos</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Salir</router-link>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#"
                    id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> -->

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
