<template>
  <div>
    <TodoHeader></TodoHeader>
  </div>
</template>

<script>
import('./assets/css/reset.css');
import TodoHeader from './components/TodoHeader.vue';

export default {
  name: 'App',
  components: {
    "TodoHeader" : TodoHeader,
  }
}
</script>

<style>
</style>
