<template>
  <section id="section">
    <div class="record-projects">
      <div class="record-wrapper">
        <div class="record-head">
          <p>나에게</p>
        </div>
        <div class="record-content">
          <div
            class="message-tooltip"
            v-for="(record, idx) in recordList"
            :key="idx"
          >
            {{ record.content }}
          </div>
          <div class="record-send">
            <input type="text" placeholder="입력!" v-model="inputText" />
            <button type="button" @click="addCollection()">Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
  name: "RecordStorage",
  components: {},
  data() {
    return {
      inputText: "",
      recordList: [],
    };
  },
  mounted() {
    this.showCollection();
  },
  methods: {
    showCollection() {
      db.collection("record")
        .get()
        .then((result) => {
          result.forEach((doc) => {
            this.recordList.push(doc.data());
          });
          console.log(this.recordList[0].content);
        });
    },
    addCollection() {
      db.collection("record")
        .doc("message" + (this.recordList.length + 1))
        .set({ content: this.inputText });
    },
  },
};
</script>

<style></style>
