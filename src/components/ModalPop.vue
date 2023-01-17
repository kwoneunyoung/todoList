<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <div class="modal-head line">
        <p>새 작업을 입력 하세요.</p>
      </div>
      <div class="modal-wrapper line">
        <ul class="modal-con">
          <li>
            <dl>
              <dt>할 일</dt>
              <dd>시작일자 {{ today }}</dd>
              <dd>
                <input v-model="inputText" type="text" placeholder="입력" />
              </dd>
            </dl>
          </li>
        </ul>
        <div class="modal-btns">
          <button type="button" @click="$emit('close-modal')">취소</button>
          <button type="button" class="register" @click="addCollection()">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import("../assets/css/style.css");
import dayjs from "dayjs";
import firebaseConfig from "../../firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();

export default {
  name: "ModalPop",
  components: {},
  data() {
    return {
      inputText: "",
      inputList: [],
      today: dayjs().format("YYYY.MM.DD"),
    };
  },
  props: {
    dbList: Array,
  },
  methods: {
    addCollection() {
      //   this.inputList.push(this.inputText);
      db.collection("todo")
        .doc("work" + (this.dbList.length + 1))
        .set({ date: this.today, title: this.inputText });
    },
  },
  watch() {},
};
</script>

<style></style>
