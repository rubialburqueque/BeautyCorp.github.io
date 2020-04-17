<template>
<div>
    <div class="text-center">
    <div class="container">
    <h6 class="h3 mb-3 font-weight-normal">Cliente</h6>
    <div v-for="(elemento, index) in dataClientes" :key="index.id">
    <h6 class="card-subtitle mb-2 text-muted">{{ elemento.nombre }}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{ elemento.direccion }}-{{ elemento.distrito }}</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{ elemento.telefono }}</h6>
    </div>
    <br>
    <br>
    <h6 class="h3 mb-3 font-weight-normal">Pedido</h6>
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
export default {
  name: 'Orders',
};
</script>
