<template>

<div class="text-center">
<input :value="text" @input="changeStore"
  <div class="col-xs-12 col-md-4" v-for="(product, i) in products">
    <h2>{{ product.name }}</h2>
    <p>{{ product.desc }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <div class="col-xs-4 btn btn-primary" v-on:click="increaseQuantity(i)">Add another</div>
    <div class="col-xs-4 btn btn-info" v-on:click="decreaseQuantity(i)">Remove one</div>
    <div class="col-xs-4 btn btn-danger" v-on:click="removeProduct(i)">Remove</div>
  </div>
</div>  


</template>

<script>

export default {

  data() {
    return {
    	products: this.$store.state.basket,
    	prod: this.$store.state.products,
      text: this.$store.state.test
    }
  },

  /*computed: {

  	abc: {
      get() {
        return this.store.state.val
      },
      set(val) {
        thi.$store.disp...
      }
    }

  },*/

  methods: {
  	removeProduct(i) {
  		this.$store.dispatch("removeProduct", i);
  	},
  	decreaseQuantity(i) {
  		this.$store.dispatch("decreaseQuantity", i);
  	},
  	increaseQuantity(i) {
  		this.$store.dispatch("increaseQuantity", i);
  	}
  }
 
}

</script>

<style>

</style>