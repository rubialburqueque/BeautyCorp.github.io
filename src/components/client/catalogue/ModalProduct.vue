<template>
  <div class="text-center">
    <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal"
          data-target="#exampleModal">AGREGAR A LA BOLSA
          </button>
          <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Has agregado un producto a tu bolsa de compras</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <br>
    <div class="container">
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
      </div>
    </div>
  </div>
</div>
<br>
    <div>
    <button type="button" class="btn btn-success"
    data-dismiss="modal">IR A BOLSA DE COMPRAS</button>
    <br>
    <br>
    <button type="button" class="btn btn-outline-success"
    data-dismiss="modal">SEGUIR COMPRANDO</button>
  </div>
  </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  name: 'ModalProduct',
};
</script>

<style>
.text-center {
  text-align: center !important
};
</style>
