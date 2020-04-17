<template>
  <div>
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fmaquillaje.jpg?alt=media&token=af5ec3dd-f0e2-4dd2-9e02-a7a2d8329143"
        class="card-img">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text">Maquillaje</p>
          <h5 class="card-title"></h5>
          <strong class="card-text">60</strong>
        </div>
        <router-link to="products" type="button" class="btn btn-success">Ver Producto</router-link>
      </div>
    </div>
  </div>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fcorporal%20pies.jpg?alt=media&token=48b9f06d-4ae6-4da4-8b15-f1710f9b2e7a"
        class="card-img">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text">Tratamiento corporal</p>
          <h5 class="card-title">Talco Exfoliante Multicare</h5>
          <strong class="card-text">48</strong>
        </div>
        <button type="button" class="btn btn-success">Ver Producto</button>
      </div>
    </div>
  </div>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fshampoo%20fortalecimiento.jpg?alt=media&token=672b2f83-b87b-4ae5-bcc8-aaee01261929"
        class="card-img">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text">Cuidado personal</p>
          <h5 class="card-title">Alviento fortalecimiento</h5>
          <strong class="card-text">37</strong>
        </div>
        <button type="button" class="btn btn-success">Ver Producto</button>
      </div>
    </div>
  </div>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fmascara.jpg?alt=media&token=a51ddf85-8532-41e8-9331-5c3d6cba7abf"
        class="card-img">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text">Maquillaje</p>
          <h5 class="card-title">Máscara Pro</h5>
          <strong class="card-text">29</strong>
        </div>
        <button type="button" class="btn btn-success">Ver Producto</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Catalogue',
  data() {
    return {
      pictures: '',
    };
  },
  computed: {
    ...mapState([
      'dataEsika',
    ]),
  },
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
