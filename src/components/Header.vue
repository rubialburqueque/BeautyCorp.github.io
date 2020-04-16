<template>
<!--     <nav>
        <ul>
            <li>
                <router-link @click="signOut" to="/login">Cerrar Sesión</router-link>
            </li>
        </ul>
    </nav> -->
<div class="text-center">
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
        <hamburguer/>
        </div>
        <div class="col-4 text-center">
          <img  class="blog-header-logo text-dark" alt="Vue logo" src="../assets/logo.png">
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
        </div>
      </div>
    </header>
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" href="#">Vista1</a>
        <a class="p-2 text-muted" href="#">Vista2</a>
        <a class="p-2 text-muted" href="#">Vista3</a>
        <a class="p-2 text-muted" href="#">Vista4</a>
        <a class="p-2 text-muted" href="#">Vista5</a>
        <a class="p-2 text-muted" href="#">Vista6</a>
        <a class="p-2 text-muted" href="#">Vista7</a>
        <a class="p-2 text-muted" href="#">Vista8</a>
        <a class="p-2 text-muted" href="#">Vista9</a>
        <a class="p-2 text-muted" href="#">Vista10</a>
        <a class="p-2 text-muted" href="#">Vista11</a>
        <a class="p-2 text-muted" href="#">Vista12</a>
        <router-link @click="signOut" to="/login">Cerrar Sesión</router-link>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
import Hamburguer from './Hamburguer.vue';

export default {
  name: 'Header',
  components: {
    Hamburguer,
  },
  methods: {
    signOut() {
      // eslint-disable-next-line no-console
      console.log('salir de sesion');
    },
  },
};
</script>

<style scoped>
.blog-header {
    line-height: 1;
    border-bottom: 1px solid
    #e5e5e5;
};
</style>
