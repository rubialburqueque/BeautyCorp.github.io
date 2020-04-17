<template>
<div>
  <HeaderBurger/>
    <div class="text-center">
    <div class="container">
    <h6 class="h3 mb-3 font-weight-normal">Cliente</h6>
    <h6 class="card-subtitle mb-2 text-muted">Nombre de la cliente</h6>
    <h6 class="card-subtitle mb-2 text-muted">Dirección de la cliente</h6>
    <h6 class="card-subtitle mb-2 text-muted">Teléfono de la cliente</h6>
    <br>
    <br>
    <h6 class="h3 mb-3 font-weight-normal">Pedido</h6>
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
          <button class="btn btn-primary btn-sm" >+</button>
          <button class="btn btn-primary btn-sm" >Número</button>
          <button class="btn btn-primary btn-sm" >-</button>
        </div>
      </div>
    </div>
  </div>
</div>
  <div>
  <p class="card-title">Total</p>
  </div>
  <div class="checkbox mb-3">
    <button type="button" class="btn btn-outline-primary btn-block" >Agregar un Producto</button>
    <br>
    <button type="button" class="btn btn-outline-primary btn-block">Cancelar Pedido</button>
  </div>
    <div class="checkbox mb-3">
    <h6>¿Tu cliente recibió tu pedido?</h6>
    <button class="btn btn-primary btn-block" >CONFIRMAR ENTREGA
    </button>
  </div>
  </div>
    </div>
</div>
</template>

<script>
import HeaderBurger from '@/components/HeaderBurger.vue';

export default {
  name: 'Orders',
  components: {
    HeaderBurger,
  },
};
</script>
