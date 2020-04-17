<template>
  <div>
    <div v-for="(elemento, index) in dataOffert" :key="index.id" class="card" style="width: 18rem;">
      <img class="card-img-top"
      :src="img"
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
/* import { catalogueFirebase } from '@/firebase/function-firebase';
 */
export default {
  name: 'Offers',
  data() {
    return {
      ...mapState([
        'dataOffert',
      ]),
    };
  },
  methods: {
    /* watchImagenes() {
      this.product = [];
      catalogueFirebase()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
            console.log('doc.data', doc.data());
            const object = {
              name: doc.data().nombre,
              precio: doc.data().precio,
              precioOfert: doc.data().precioOffer,
              img: doc.data().img,
            };
            this.$store.dispatch('getOffert', object);
            // eslint-disable-next-line no-console
            console.log(object);
          });
          // eslint-disable-next-line no-console
          console.log(this.product);
        });
    }, */
  },
};
</script>
