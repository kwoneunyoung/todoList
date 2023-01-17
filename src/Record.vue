<template>
  <TodoHeader></TodoHeader>
  <TodoClick></TodoClick>
  <Record></Record>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoClick from "./components/TodoClick.vue";
import Record from "./components/RecordStorage.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components: {
    TodoHeader: TodoHeader,
    TodoClick: TodoClick,
    Record: Record,
  },
};
</script>

<style></style>
