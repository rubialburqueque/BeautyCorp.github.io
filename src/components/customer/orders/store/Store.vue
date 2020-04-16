<template>
<div>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Selecciona tu tienda y fecha de recojo</h2>
    <br>
    <br>
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="@/assets/logo.png" class="card-img" alt="20px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">(Nombre de tienda)</h5>
          <p class="card-text">
            <small class="text-muted">(Dirección de tienda)</small>
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
    <h5 class="card-title">(Fechas disponibles)</h5>
    <select class="text-center card-input ">
        <option value="" disabled="disabled" selected="selected">Sabado 05/04/2020 Gratis</option>
        <option value="2020">Sabado 05/04/2020 Gratis</option>
        <option value="2021">Sabado 05/04/2020 Gratis</option>
        <option value="2022">Sabado 05/04/2020 Gratis</option>
    </select>
    <br>
    <br>
    <div class="text-center">
    <button class="btn btn-outline-success btn-block" >SELECCIONAR
    </button>
    <br>
  </div>
    </div>
  </div>
  </div>
    </div>
    <br>
    <div class="text-center">
     <p>En la lista sólo encontrarás los lugares disponibles para retirar.
        Lo sentimos si tu lugar favorito no está disponible</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Store',
};
</script>

<style>

</style>
