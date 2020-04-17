<template>
  <div>
    <h1>Probando Firebase</h1>
    <span>{{ dataEsika }}</span>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Catalogue',
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
