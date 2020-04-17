<template>
<div>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Mi bolsa de compras</h2>
    <br>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fmaquillaje.jpg?alt=media&token=af5ec3dd-f0e2-4dd2-9e02-a7a2d8329143" class="card-img" alt="20px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Set de Sombras</h5>
        <strong class="card-text">60.00</strong>
        <p class="card-text">1</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-primary btn-sm" >+</button>
          <button class="btn btn-primary btn-sm" >1</button>
          <button class="btn btn-primary btn-sm" >-</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div>
  <p class="card-title">Costo de envio: Gratis</p>
  <p class="card-title">Monton final a pagar: 60.00</p>
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
