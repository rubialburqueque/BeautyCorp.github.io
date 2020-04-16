<template>
  <div>
    <div class="text-center">
      <div class="container">
        <form class="form-signin" action="" @submit="checkForm"></form>
        <h2 class="h3 mb-3 font-weight-normal">
        Bienvenida (colocar aqui nombre de la consultora)</h2>
        <br>
        <h6>Catálogo Virtual</h6>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/catalogo esika.jpg" class="d-block w-100" alt="50px">
    </div>
    <div class="carousel-item">
      <img src="../assets/catalogo foto.jpg" class="d-block w-100" alt="50px">
    </div>
    <div class="carousel-item">
      <img src="../assets/cyzonne.jpg" class="d-block w-100" alt="50x">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <div class="checkbox mb-3">
          <h6>Esika</h6>
          <button class="btn btn-lg btn-primary btn-block">COMPARTIR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagazineViews',
};
</script>
<style scoped>
.text-center {
    text-align: center !important
  };
.form-signin {
    width: 50px;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    };
</style>
