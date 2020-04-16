<template>
<div>hola desde body
  <Products/>
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
           </div>
            <span class="title is-4">
            <strong>S/. 49.90</strong>
            </span>
            <img src="@/assets/star.svg" alt="50x">
</div>
</template>

<script>
import Products from './client/catalogue/Products.vue';

export default {
  name: 'Body',
  components: {
    Products,
  },
};
</script>

<style>

</style>
