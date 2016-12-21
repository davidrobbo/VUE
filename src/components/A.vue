<template>
<div>
	<p v-for="(quote, i) in quotes">{{ quote }} --- <span v-on:click="deleteQ(i)" style="background-color:yellow;">{{ countQ }}</span></p>
	<input type="text" v-model="newQuote" v-on:keyup.enter="addNew"/>
	<router-view></router-view>
</div>
</template>

<script>

export default {

  data() {
    return {
    	quotes: this.$store.state.quotes,
    	newQuote: ""
    }
  },

  computed: {

  	countQ() {
    	return this.$store.getters.countQuotes
  	}

  },

  methods: {
  	addNew() {
  		this.$store.dispatch("addNew", this.newQuote)
  		this.newQuote = ""
  	},
  	deleteQ(i) {
  		this.$store.dispatch("delete", i);
  	}
  }
 
}

</script>