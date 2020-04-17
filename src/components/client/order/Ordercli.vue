<template>
<div>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Mi bolsa de compras</h2>
    <br>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="@/assets/catalogo foto.jpg" class="card-img" alt="20px">
    </div>
    <div class="col-md-8">
      <div v-for="(elemento, index) in dataEsika" :key="index.id" class="card-body">
        <h5 class="card-title">{{ elemento.Nombre }}</h5>
        <strong class="card-text">{{ elemento.Precio }}</strong>
        <p class="card-text">{{ elemento.cantidad }}</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-primary btn-sm" >+</button>
          <button class="btn btn-primary btn-sm" >{{ elemento.cantidad }}</button>
          <button class="btn btn-primary btn-sm" >-</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div>
  <p class="card-title">Costo de envio: Gratis</p>
  <p class="card-title">Monton final a pagar:</p>
  </div>
    <div class="checkbox mb-3">
    <button class="btn btn-success btn-block">REALIZAR PEDIDO
    </button>
    <router-link to="/datos" class="btn btn-success btn-block">CONTINUAR
    </router-link>
  </div>
  </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Orders',
};
</script>
