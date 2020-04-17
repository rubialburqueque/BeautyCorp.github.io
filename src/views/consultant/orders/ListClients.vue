<template>
<div>
    <HeaderBurger/>
    <div class="text-center">
    <div class="container">
    <h2 class="h3 mb-3 font-weight-normal">Mis Pedidos</h2>
    <br>
    <br>
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="@/assets/cliente.svg" class="card-img" alt="20px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">(Nombre de consultora)</h5>
          <p class="card-text">
            <small class="text-muted">(Distrito donde vive consultora)</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="checkbox mb-3">
    <button class="btn btn-lg btn-primary btn-block" >VER MÁS
    </button>
  </div>
  </div>
    </div>
</div>
</template>

<script>
import HeaderBurger from '@/components/HeaderBurger.vue';

export default {
  name: 'Clients',
  components: {
    HeaderBurger,
  },
};
</script>
