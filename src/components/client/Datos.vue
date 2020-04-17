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
        <h6>Direción</h6>
        <label class="sr-only"></label>
        <input type="texto" placeholder="Los alcanfores 548 - Surco"
        id="inputText" class="form-control" v-model="completeName">
        <br>
        <h6>Referencia</h6>
        <label class="sr-only"></label>
        <input type="texto" placeholder="Altura de la av Carrillo cuadra 7"
        id="inputText" class="form-control" v-model="completeName">
        <br>
        <br>
        <div class="checkbox mb-3">
        <label>
        <input type="checkbox"> He leido y acepto
        <Condition/> y las
          politicas de uso de datos personales
        </label>
        </div>
        <br>
        <div class="checkbox mb-3">
          <router-link to="/confirm" class="btn btn-lg btn-primary btn-block">CONTINUAR
          </router-link>
        <br>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Datos',
};
</script>
