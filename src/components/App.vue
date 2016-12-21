<template>
  <div id="app" class="container">
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>
<script>
import GetTodo from './GetToDo.vue'
import CurrentTodos from './CurrentTodos.vue'
import CompletedTodos from './CompletedTodos.vue'
export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
 
}
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>