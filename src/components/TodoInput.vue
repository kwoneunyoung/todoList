<template>
  <TodoClick :dbList="dbList"></TodoClick>
  <section id="section">
    <div class="status-projects">
      <div class="status-date">
        <h1>Project</h1>
        <p>{{ today }}</p>
      </div>
      <div class="status-nums">
        <ul>
          <li>45</li>
          <li>In Progress</li>
        </ul>
        <ul>
          <li>24</li>
          <li>Up comming</li>
        </ul>
        <ul>
          <li>{{ dbList.length }}</li>
          <li>Total Projects</li>
        </ul>
      </div>
      <TodoList :dbList="dbList"></TodoList>
    </div>
  </section>
</template>

<script>
import("../assets/css/style.css");
import firebaseConfig from "../../firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import dayjs from "dayjs";
import TodoClick from "../components/TodoClick.vue";
import TodoList from "../components/TodoList.vue";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const db = firebase.firestore();

export default {
  name: "TodoInput",
  components: {
    TodoClick: TodoClick,
    TodoList: TodoList,
  },
  data() {
    return {
      dbList: [],
      data: "",
      today: dayjs().format("MMMM, MM"),
    };
  },
  mounted() {
    this.showCollection();
  },
  methods: {
    showCollection() {
      db.collection("todo")
        .get()
        .then((result) => {
          result.forEach((doc) => {
            // this.data = JSON.stringify(doc.data());
            //   console.log(data);
            //   console.log(JSON.stringify(doc.data()));
            this.dbList.push(doc.data());
          });
          console.log(this.dbList[0].title);
        });
    },
  },
};
</script>

<style></style>
