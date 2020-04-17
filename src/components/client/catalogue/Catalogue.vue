<template>
  <div>
  <div v-for="(elemento, index) in dataEsika" :key="index.id" class="card mb-3"
  style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/catalogo%20foto.jpg?alt=media&token=ba641412-658e-4ab3-a99b-aa26d3e273ab"
      class="card-img" >
      <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fmaquillaje.jpg?alt=media&token=af5ec3dd-f0e2-4dd2-9e02-a7a2d8329143"
      class="card-img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{ elemento.Categoría }}</p>
        <h5 class="card-title">{{ elemento.Nombre }}</h5>
        <strong class="card-text">{{ elemento.Precio }}</strong>
      </div>
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
