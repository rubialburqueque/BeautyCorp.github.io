<template>
<div>
  <div class="text-center">
      <div class="container">
        <br>
        <h6>Catálogo Virtual</h6>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/catalogo foto.jpg" class=" w-40" alt="30px">
              </div>
              <div class="carousel-item">
                <img src="@/assets/catalogo foto.jpg" class=" w-40" alt="30px">
              </div>
              <div class="carousel-item">
                <img src="@/assets/cyzonne.jpg" class=" w-40" alt="30x">
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls"
          role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls"
          role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <br>
        <div class="checkbox mb-3">
          <h6>Esika</h6>
        </div>
      </div>
    </div>
    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">Nombre del producto</h6>
          <div>
          <img src="@/assets/star.svg" alt="50x">
          <img src="@/assets/star.svg" alt="50x">
          <img src="@/assets/star.svg" alt="50x">
          <img src="@/assets/star.svg" alt="50x">
          </div>
          <small class="text-muted">Descripcion del producto</small>
                  <div class="select is-rounded is-small">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                </select>
              </div>
        </div>
        <strong>$20</strong>
      </li>
    </ul>
</div>
</template>

<script>
// import firebase from 'firebase';

export default {
  name: 'Products',
  data() {
    return {
      picture: '',
    };
  },
  methods: {
    /* getImgUrl() {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const imageRef = storageRef.child('images');
    }, */
  },


};
</script>

<style>

</style>
