<template>
  <div id="doList-wrapper">
    <div class="doItem">
      <ul class="doItem-content">
        <li v-for="(todo, idx) in dbList" :key="idx">
          <p>{{ todo.title }}</p>
          <span>시작일자 : {{ todo.date }}</span>
          <!-- <div class="do-btns">
            <button type="button">수정</button>
            <button type="button">삭제</button> 
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import("../assets/css/style.css");

export default {
  name: "TodoList",
  components: {},
  data() {
    return {};
  },
  props: {
    dbList: Array,
  },
};
</script>

<style></style>
