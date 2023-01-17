<template>
  <header id="head">
    <div class="head-wrapper inner">
      <h1 id="logo">
        <router-link to="/home">Todo</router-link>
      </h1>
      <div class="search-wrapper">
        <input
          type="textarea"
          placeholder="할 일을 검색 해보세요!"
          class="search-input"
        />
        <button type="button" class="search-btn"></button>
      </div>
      <div class="nav-wrapper">
        <div class="inner">
          <ul class="gnb-wrapper">
            <li class="active"><router-link to="/home">홈</router-link></li>
            <li>
              <router-link to="/record">기록</router-link>
            </li>
            <li>
              <a href="javascript:;" @click="modalCal = true">캘린더</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <ModalCalender
    v-if="modalCal"
    @close-modal="modalCal = false"
  ></ModalCalender>
</template>

<script>
import("../assets/css/style.css");
import ModalCalender from "./ModalCalendar.vue";

export default {
  name: "TodoHeader",
  components: {
    ModalCalender: ModalCalender,
  },
  data() {
    return {
      modalCal: false,
    };
  },
};
</script>

<style></style>
