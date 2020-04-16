<template>
<div class="text-center">
      <div class="container">
        <br>
        <h6>Nombres</h6>
        <label class="sr-only">Name</label>
        <input type="texto" placeholder="Claudia Sofia"
        id="inputEmail" class="form-control" v-model="completeName">
        <br>
        <h6>Apellidos</h6>
        <label class="sr-only">LastName</label>
        <input type="texto" placeholder="Olivares Mendoza"
        id="inputEmail" class="form-control" v-model="lastName">
        <br>
        <h6>Correo Electrónico</h6>
        <label class="sr-only">Email address</label>
        <input type="texto" placeholder="clau345@correo.com"
        id="inputEmail" class="form-control" v-model="email">
        <br>
        <h6>Celular</h6>
        <label class="sr-only">Movilphone</label>
        <input type="texto" placeholder="953 752 456"
        id="inputEmail" class="form-control" v-model="phone">
        <br>
        <h6>Dirección</h6>
        <label class="sr-only">direccion</label>
        <input type="texto" placeholder="Calle 51 Urb. San José Breña"
        id="inputdireccion" class="form-control" v-model="address">
        <br>
        <h6>Referencia</h6>
        <label class="sr-only">referencia</label>
        <input type="texto" placeholder="Altura de la Av. La Marina"
        id="inputdireccion" class="form-control" v-model="adressPluss">
        <br>
        <div class="checkbox mb-3">
          <button class="btn btn-success btn-block">CONTINUAR</button>
        <br>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>

<style>

</style>