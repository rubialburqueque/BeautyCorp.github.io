<template>
<div>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Resumen de tu Pedido</h2>
    <br>
    <h6 class="text-title">Titular del Pedido</h6>
    <h6 class="card-subtitle mb-2 text-muted">Nombre de la cliente</h6>
    <br>
    <h6 class="text-title">Dirección de recojo</h6>
    <h6 class="card-subtitle mb-2 text-muted">Dirección de la cliente</h6>
    <br>
    <h6 class="text-title">Fecha de entrega</h6>
    <h6 class="card-subtitle mb-2 text-muted">Fecha de entrega</h6>
    <br>
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="@/assets/catalogo foto.jpg" class="card-img" alt="20px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Nombre producto</h5>
        <p class="card-text">Precio</p>
        <p class="card-text">Cantidad</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button class="btn btn-success btn-sm" >+</button>
          <button class="btn btn-success btn-sm" >Número</button>
          <button class="btn btn-success btn-sm" >-</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div>
  <p class="card-title">Costo de retiro: Gratis</p>
  <p class="card-title">Total</p>
  </div>
    <div class="checkbox mb-3">
    <button class="btn btn-success btn-block" >CONTINUAR
    </button>
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
