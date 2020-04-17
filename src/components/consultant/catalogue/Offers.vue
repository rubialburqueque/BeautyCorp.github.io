<template>
  <div>
      <ul v-for="{name, precio, precioOfert, img} in product" :key="name" class="list-products">
        <li>{{ name }} ola - {{ precio }} - {{ precioOfert }}
<!--             <div><img :src="img" alt=""></div> -->
        </li>
        <img :src="img" alt="">
      </ul>
    <div class="text-center">
      <div class="container">
        <h2 class="h3 mb-3 font-weight-normal">Mis Beauty puntos</h2>
        <br />
        <button @click="watchImagenes">hola</button>
       <p>hola</p>
        <br />
        <h6>Nivel 2</h6>
        <h1 class="card-body text-primary">Cantidad de puntos</h1>
        <h6 class="card-subtitle mb-2 text-muted">
          A (cantidad de puntos) para llegar al tercer nivel
        </h6>
        <br />
        <br />
        <div class="checkbox mb-3">
          <button class="btn btn-lg btn-primary btn-block">MIRA LO QUE PUEDES CANJEAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { catalogueFirebase } from '@/firebase/function-firebase';

export default {
  name: 'Offers',
  data() {
    return {
      product: [],
    };
  },
  methods: {
    watchImagenes() {
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
    },
  },
};
</script>
