<template>
  <div class="home">
    <div class="text-center">
      <!--header-->
      <div class="container">
        <header class="blog-header py-3">
          <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
              <a class="text-muted" href="#">Inicio</a>
            </div>
            <div class="col-4 text-center">
              <img  class="blog-header-logo text-dark" alt="Vue logo" src="../assets/logo.png">
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
              <a class="btn btn-sm btn-outline-secondary" href="#">Sign In</a>
            </div>
          </div>
        </header>
      </div>
      </div>
      <!--home-->
  <div class="text-center">
    <form class="form-signin" action=""></form>
    <h2>Inicia Sesión</h2>
    <h6>Email</h6>
    <label class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" required="" autofocus="">
    <button class="btn btn-primary" >Iniciar Sesión</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

};
</script>
