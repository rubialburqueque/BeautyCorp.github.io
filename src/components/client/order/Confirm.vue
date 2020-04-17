<template>
<div>
    <div class="text-center">
    <div class="container">
    <img src="@/assets/esika-logo.svg" class="" alt="">
    <br>
    <br>
    <h2 class="card-body text-success">Felicitaciones</h2>
    <br>
    <br>
    <h6 class="text-success">Tu pedido ha sido enviado a tu consultora:</h6>
    <h6 class="text-success">Daniela Salvatierra</h6>
    <h6 class="text-success">Ella se contactará contigo para coordinar
      la entrega y pago de tu pedido.</h6>
    <br>
    <br>
    <div class="checkbox mb-3">
        <router-link to="/catalogue" class="btn btn-success btn-block">
        VOLVER AL CATÁLOGO</router-link>
    </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Confirm',
};
</script>

<style>

</style>
