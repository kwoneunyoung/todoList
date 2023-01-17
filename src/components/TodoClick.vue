<template>
  <div id="clickMenu">
    <!-- <h1 id="img" @click="showMemu()">
      <a href="javascript:;">list</a>
    </h1> -->
    <ul id="nav">
      <li><router-link to="/home"></router-link></li>
      <li @click="modalView = true"><a href="javascript:;"></a></li>
      <li class="active"><router-link to="/record"></router-link></li>
      <li @click="modalCal = true"><a href="javascript:;"></a></li>
      <!-- <li><a href="javascript:;"></a></li> -->
    </ul>
  </div>
  <ModalPop
    v-if="modalView"
    @close-modal="modalView = false"
    :dbList="dbList"
  ></ModalPop>
  <ModalCalender
    v-if="modalCal"
    @close-modal="modalCal = false"
  ></ModalCalender>
</template>

<script>
import("../assets/css/style.css");
import ModalPop from "./ModalPop.vue";
import ModalCalender from "./ModalCalendar.vue";

export default {
  name: "TodoClick",
  components: {
    ModalPop: ModalPop,
    ModalCalender,
  },
  data() {
    return {
      modalView: false,
      modalCal: false,
    };
  },
  props: {
    dbList: Array,
  },
  methods: {
    showMemu() {
      console.log("ㅎㅇ");
    },
  },
};
</script>

<style></style>
