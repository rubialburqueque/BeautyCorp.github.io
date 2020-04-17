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
      <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fmaquillaje.jpg?alt=media&token=af5ec3dd-f0e2-4dd2-9e02-a7a2d8329143" class="card-img" alt="20px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Set de Sombras</h5>
        <p class="card-text">60.00</p>
        <p class="card-text">1</p>
      </div>
    </div>
  </div>
</div>
<br>
    <div>
    <router-link to="/ordercli" type="button" class="btn btn-success"
    data-dismiss="modal">IR A BOLSA DE COMPRAS</router-link>
    <br>
    <br>
    <router-link to="/catalogue" type="button" class="btn btn-outline-success"
    data-dismiss="modal">SEGUIR COMPRANDO</router-link>
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
