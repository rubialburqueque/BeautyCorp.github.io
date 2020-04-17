<template>
  <div>
      <div class="text-center">
      <div class="container">
        <h2 class="h3 mb-3 font-weight-normal">Bienvenida</h2>
        <br>
        <br>
        <h6>Ingresa el código de tu consultora</h6>
        <label class="sr-only"></label>
        <input type="text" placeholder="J2807"
        id="inputEmail" class="form-control">
        <br>
        <div class="checkbox mb-3">
          <router-link to="/catalogue" class="btn btn-lg btn-primary btn-block">Ingresar
          </router-link>
        <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ComponentLoginCLi',
  computed: {
    ...mapState([
      'dataConsulter',
    ]),
  },
};
</script>
