<template>
<div>
    <HeaderBurger/>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Mis Beauty puntos</h2>
    <br>
    <br>
    <h6>Nivel 2</h6>
    <h1 class="card-body text-primary">Cantidad de puntos</h1>
    <h5 class="card-subtitle mb-2 text-muted">A <b>158 puntos</b> para llegar al tercer nivel</h5>
    <br>
    <br>
    <div class="checkbox mb-3">
        <button class="btn btn-lg btn-primary btn-block" >CANJEAR PUNTOS</button>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import HeaderBurger from '@/components/HeaderBurger.vue';

export default {
  name: 'Points',
  components: {
    HeaderBurger,
  },
};
</script>
