<template>
<div>
	<p v-for="quote in quotes">{{ quote }} --- {{ countQ }}</p>
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
  	}
  }
 
}

</script>