<template>
  <div>
    <div class="text-center">
        <div class="container">
            <form class="form-signin" action="">
            <h2 class="h3 mb-3 font-weight-normal">Pago</h2>
            <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Titular</label>
            <input type="text" class="form-control" placeholder="Claudia Sofia" required="">
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">N° de tarjeta</label>
            <input type="text" class="form-control" placeholder="4586 3258 1523 7531" required="">
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-number">Fecha de vencimiento</label>
            <input type="text" class="form-control" placeholder="03/21" required="">
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="556" required="">
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">Monto a pagar</label>
            <input type="text" class="form-control" placeholder="S/. 207.90" required="">
          </div>
        </div>
            <br>
            <br>
            <br>
            <div class="checkbox mb-3">
        <button class="btn btn-primary btn-block"> REALIZAR PAGO</button>
            </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
};
</script>

<style>

</style>
