<template>
  <router-view></router-view>
  <!-- <TodoHeader></TodoHeader>
  <TodoInput></TodoInput> -->
</template>

<script>
import("./assets/css/reset.css");
import("./assets/css/mobile.css");

// import TodoHeader from "./components/TodoHeader.vue";
// import TodoInput from "./components/TodoInput.vue";
// import RecordStorage from "./components/RecordStorage.vue";

export default {
  name: "App",
  components: {
    // TodoHeader: TodoHeader,
    // TodoInput: TodoInput,
    // RecordStorage: RecordStorage,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
