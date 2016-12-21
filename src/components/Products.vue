<template>
<div class="text-center">
  <div class="col-xs-12 col-md-4" v-for="(product, i) in products">
    <h2>{{ product.name }}</h2>
    <p>{{ product.desc }}</p>
    <p>{{ toGbp(product.price) }}</p>
    <div class="col-xs-12 btn btn-primary" v-on:click="updateBasket(i)">Add to basket</div>
  </div>
</div>  
</template>

<script>

import cur from '../filters/to-gbp.js'

export default {

  data() {
    return {
    	
    }
  },

  mounted() {
    this.$http.get("/hiya", {}).then(function(res){
      console.log(res)
    }).catch(function(err){

    })
  },

  computed: {

  	products() {
    	return this.$store.getters.activeProducts
  	}

  },

  methods: {
  	updateBasket: function(i) {
  		this.$store.dispatch("updateBasket", i);
  	},
  	deleteQ(i) {
  		this.$store.dispatch("delete", i);
  	},
    toGbp: cur
  }
 
}

</script>

<style>

</style>