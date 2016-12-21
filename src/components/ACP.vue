<template>
<div>
	<div class="col-xs-12 col-sm-6">
		<div class="col-xs-12">
			<h4>Add a new product</h4>
		</div>
		<div class="col-xs-12">
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" id="name" class="form-control" v-model="product.name"/>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="form-group">
				<label for="desc">Decription:</label>
				<input type="text" id="desc" class="form-control" v-model="product.desc"/>
			</div>
		</div>
		<div class="col-xs-12">
			<div class="form-group">
				<label for="price">Price:</label>
				<input type="number" id="price" class="form-control" v-model="product.price"/>
			</div>
		</div>

		<div class="col-xs-12">
			<div class="btn btn-primary" v-on:click="addNewProduct">
				Add
			</div>
		</div>
	</div>

	<div class="col-xs-12 col-sm-6">

	</div>
</div>
</template>

<script>

export default {
	
	data() {
		return {
			product: {
				name: "",
				desc: "",
				price: 0
			}
		}
	},

	methods: {
		addNewProduct() {
			this.$store.dispatch("addNewProduct", this.product).then(function(res){
				console.log(res);
			}).catch(function(err){
				console.log(err);
			});
		}
	}

}

</script>

<style>

</style>