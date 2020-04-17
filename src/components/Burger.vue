<<<<<<< HEAD
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
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
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
                </li>

            </ul>
        </div>
    </nav>
=======
<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Cuidado Personal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Fragancias<span
      class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Maquillaje</a>
      <a class="nav-item nav-link" href="#">Tratamiento Facial</a>
      <a class="nav-item nav-link" href="#">Tratamiento Corporal</a>
      <a class="nav-item nav-link" href="#">Todos los Productos</a>
    </div>
  </div>
</nav>
  </div>
>>>>>>> ef5f35aec23b2de47b106f4c6f3bf54fcfee8f89
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
