<template>
  <div>
    <div v-for="(elemento, index) in dataEsika" :key="index.id" class="card" style="width: 18rem;">
      <img class="card-img-top"
      src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%20ESIKA%2Fcorporal%20pies.jpg?alt=media&token=48b9f06d-4ae6-4da4-8b15-f1710f9b2e7a"
      alt="Card image cap">
      <div class="card-body">
        <p class="card-text">{{ elemento.Categoría }}</p>
        <h5 class="card-title">{{ elemento.Nombre }}</h5>
        <p class="card-text">{{ elemento.Precio }}</p>
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
