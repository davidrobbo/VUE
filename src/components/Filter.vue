<template>

<div class="sidebar-nav">
  <div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <span class="visible-xs navbar-brand">Filters</span>
    </div>
    <div class="navbar-collapse collapse sidebar-navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a @click="updateActiveFilter(null)">View all</a></li>
        <li v-if="!filter.options.length" v-for="(filter, i) in filters" ><a @click="updateActiveFilter(filter.id)">{{ filter.name }}</a></li>
        <li v-if="filter.options.length" v-for="(filter, i) in filters" class="dropdown">
          <a @click="updateActiveFilter(filter.id)" class="dropdown-toggle" data-toggle="dropdown">{{ filter.name }} <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li v-for="(opt, i) in filter.options"><a href="#">{{ opt }}</a></li>
          </ul>
        </li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div>

</template>

<script>

export default {
  
  data () {
    return {
      filters: this.$store.state.filters
    }
  },
  methods: {
    updateActiveFilter(id){
      this.$store.dispatch("updateActiveFilter", id)
    }
  }

}

</script>

<style>

/* make sidebar nav vertical */ 
@media (min-width: 768px) {
  .sidebar-nav .navbar .navbar-collapse {
    padding: 0;
    max-height: none;
  }
  .sidebar-nav .navbar ul {
    float: none;
  }
  .sidebar-nav .navbar ul:not {
    display: block;
  }
  .sidebar-nav .navbar li {
    float: none;
    display: block;
  }
  .sidebar-nav .navbar li a {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

li {
  cursor: pointer;
}

</style>