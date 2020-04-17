<template>
  <div>
    <div class="text-center">
        <div class="container">
          <br>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%2Fbody%20blooom.jpg?alt=media&token=990da41b-c9f7-4e04-bb61-dc39125be4cf">
                </div>
                <div class="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%2Fperfume%20flyrty.jpg?alt=media&token=a6999531-6861-42bd-ad74-b41642dcc28e">
                </div>
                <div class="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/beautycorp-a8012.appspot.com/o/PRODUCTOS%2Fstudio%20primer.jpg?alt=media&token=360b774e-7551-4bc4-97f7-f177134bb6a2">
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
          <div v-for="(elemento, index) in dataEsika" :key="index.id">
            <h6 class="my-0">{{ elemento.Nombre }}</h6>
            <div>
            <img src="@/assets/star.svg" alt="50x">
            <img src="@/assets/star.svg" alt="50x">
            <img src="@/assets/star.svg" alt="50x">
            <img src="@/assets/star.svg" alt="50x">
            </div>
            <small class="text-muted">{{ elemento.Description }}</small>
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
                  <ModalProduct/>
                </div>
                <strong>{{ elemento.Precio }}</strong>
          </div>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ModalProduct from './ModalProduct.vue';
// import firebase from 'firebase';

export default {
  name: 'Products',
  components: {
    ModalProduct,
  },
  data() {
    return {
      picture: '',
    };
  },
  computed: {
    ...mapState([
      'dataEsika',
    ]),
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
