<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
  },
};
</script>

<style></style>
