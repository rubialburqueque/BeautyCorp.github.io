<template>
  <div>
    <h2 class="h3 mb-3 font-weight-normal">Premios</h2>
    <br>
    <br>
  <div v-for="(elemento, index) in dataPremios" :key="index.id" class="card mb-3"
  style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PREMIOS%2Fvajilla.jpg?alt=media&token=df0d4728-c47c-462d-80c8-6ed363e372ac"
      class="card-img" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ elemento.nombre }}</h5>
        <p class="card-text">{{ elemento.descripcion }}</p>
        <strong class="card-text">{{ elemento.precio }}</strong>
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
      'dataPremios',
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

