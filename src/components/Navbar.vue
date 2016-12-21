<template>

	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span> 
	      </button>
		  <div class="navbar-brand">Vue JS</div>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	      <ul class="nav navbar-nav navbar-right">	    
		      <li :class="{ 'active': isRoute('/') }"><router-link to="/">Home</router-link></li>
		      <li :class="{ 'active': isRoute('/products') }"><router-link to="/products">Products</router-link></li>
		      <li :class="{ 'active': isRoute('/basket') }"><router-link to="/basket">Basket <span v-if="basketItemCount" class="badge">{{ basketQuantity }}</span></router-link></li>
		      <li :class="{ 'active': isRoute('/acp') }"><router-link to="/acp">A.C.P</router-link></li>
		  </ul>
	    </div>
	  </div>
	</nav>

</template>

<script>

export default {
	/*mounted() {
		console.log(this.$route)
	},*/
	methods: {
		isRoute: function (partial) {
		    return (this.$route.path == partial)
		}
	},
	computed: {
		basketItemCount() {
		 return this.$store.getters.basketItemCount
		},		
		basketQuantity() {
		 return this.$store.getters.basketQuantity
		}
	}
}

</script>

<style>

</style>