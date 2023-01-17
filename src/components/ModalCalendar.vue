<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      <div class="modal-cal-head line">
        <p>캘린더</p>
      </div>
      <div class="modal-wrapper-cal line">
        <div class="modal-cal-con">
          <div class="main">
            <div class="content-wrap">
              <div class="content-left">
                <div class="main-wrap">
                  <div id="main-day" class="main-day">{{ mainTodayDay }}</div>
                  <div id="main-date" class="main-date">
                    {{ mainTodayDate }}
                  </div>
                </div>
                <!-- <div class="todo-wrap">
                  <div class="todo-title">Todo List</div>
                  <div class="input-wrap">
                    <input
                      type="text"
                      placeholder="please write here!!"
                      id="input-box"
                      v-model="inputTodo"
                      class="input-box"
                    />
                    <button type="button" id="input-data" class="input-data">
                      INPUT
                    </button>
                    <div
                      id="input-list"
                      class="input-list"
                      ref="inputList"
                    ></div>
                  </div>
                </div> -->
              </div>
              <div class="content-right">
                <table id="calendar" align="center">
                  <thead>
                    <tr class="btn-wrap clearfix">
                      <td>
                        <label id="prev" @click="prev()"> &#60; </label>
                      </td>
                      <td align="center" colspan="5">
                        {{ currentTitle }}
                      </td>
                      <td>
                        <label id="next" @click="next()"> &#62; </label>
                      </td>
                    </tr>
                    <tr ref="temp">
                      <td class="sun" align="center">Sun</td>
                      <td align="center">Mon</td>
                      <td align="center">Tue</td>
                      <td align="center">Wed</td>
                      <td align="center">Thu</td>
                      <td align="center">Fri</td>
                      <td class="sat" align="center">Sat</td>
                    </tr>
                  </thead>
                  <tbody
                    id="calendar-body"
                    ref="calendarBody"
                    class="calendar-body"
                  ></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import("../assets/css/style.css");

export default {
  name: "ModalCalender",
  components: {},
  data() {
    return {
      currentTitle: "",
      calendarBody: "",
      inputTodo: "",
      mainTodayDay: "",
      mainTodayDate: "",
      keyValue: "",
      today: new Date(),
      first: "",
      dayList: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      monthList: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      notLeapYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      pageFirst: "", // 월 첫번째 날에 대한 정보
      pageYear: [],
      tdGroup: [],
      todoList: [],
    };
  },
  mounted() {
    this.init();
    //this.showSetting();
  },
  methods: {
    init() {
      this.first = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
      this.pageFirst = this.first;

      this.currentTitle =
        this.monthList[this.first.getMonth()] +
        ",    " +
        this.first.getFullYear();

      this.showMain();
      if (this.first.getFullYear() % 4 == 0) {
        this.pageYear = this.leapYear;
      } else {
        this.pageYear = this.notLeapYear;
      }

      this.showCalendar();
    },

    showCalendar() {
      console.log("showCalendar 실행 중");
      let monthCnt = 100;
      let cnt = 1;

      for (let i = 0; i < 6; i++) {
        let $tr = document.createElement("tr");
        $tr.setAttribute("id", monthCnt);
        for (let j = 0; j < 7; j++) {
          if (
            (i === 0 && j < this.first.getDay()) ||
            cnt > this.pageYear[this.first.getMonth()]
          ) {
            let $td = document.createElement("td");
            $tr.appendChild($td);
          } else {
            let $td = document.createElement("td");
            $td.textContent = cnt;
            $td.setAttribute("id", cnt);
            $tr.appendChild($td);
            cnt++;
          }
        }
        monthCnt++;
        this.$refs.calendarBody.appendChild($tr);
      }
    },

    prev() {
      //   const $divs = document.querySelectorAll("#input-list > div");
      //   $divs.forEach(function (e) {
      //     e.remove();
      //   });
      //   const $btns = document.querySelectorAll("#input-list > button");
      //   $btns.forEach(function (e1) {
      //     e1.remove();
      //   });
      if (this.pageFirst.getMonth() == 1) {
        this.pageFirst = new Date(this.first.getFullYear() - 1, 12, 1);
        this.first = this.pageFirst;
        console.log("1번");
        if (this.first.getFullYear() % 4 == 0) {
          this.pageYear = this.leapYear;
          console.log("2번");
        } else {
          this.pageYear = this.notLeapYear;
          console.log("3번");
        }
      } else {
        console.log("4번");
        this.pageFirst = new Date(
          this.first.getFullYear(),
          this.first.getMonth() - 1,
          1
        );
        this.first = this.pageFirst;
      }
      this.today = new Date(
        this.today.getFullYear(),
        this.today.getMonth() - 1,
        this.today.getDate()
      );
      console.log("this.pageFirst", this.pageFirst, "this.today:", this.today);

      this.currentTitle =
        this.monthList[this.first.getMonth()] +
        ",   " +
        this.first.getFullYear();
      console.log(this.currentTitle);

      this.removeCalendar();
      this.showCalendar();
      this.showMain();
      this.showSetting();

      let clickedDate1 = document.getElementById(this.today.getDate());
      clickedDate1.classList.add("active");

      this.clickStart();
      //this.showingList();
    },

    next() {
      console.log("다음버튼");

      if (this.pageFirst.getMonth() == 12) {
        this.pageFirst = new Date(this.first.getFullYear() + 1, 1, 1);
        this.first = this.pageFirst;
        if (this.first.getFullYear() % 4 == 0) {
          this.pageYear = this.leapYear;
        } else {
          this.pageYear = this.notLeapYear;
        }
      } else {
        this.pageFirst = new Date(
          this.first.getFullYear(),
          this.first.getMonth() + 1,
          1
        );
        this.first = this.pageFirst;

        this.today = new Date(
          this.today.getFullYear(),
          this.today.getMonth() + 1,
          this.today.getDate()
        );
        console.log(
          "this.pageFirst",
          this.pageFirst,
          "this.today:",
          this.today
        );

        this.currentTitle =
          this.monthList[this.first.getMonth()] +
          ", " +
          this.first.getFullYear();

        console.log(this.currentTitle);

        this.removeCalendar();
        this.showCalendar();
        this.showMain();
        this.showSetting();

        let clickedDate1 = document.getElementById(this.today.getDate());
        clickedDate1.classList.add("active");
        this.clickStart();
        //this.reshowingList();
      }
    },

    removeCalendar() {
      console.log("removeCalendar 실행");
      let catchTr = 100;
      for (let i = 100; i < 106; i++) {
        let $tr = document.getElementById(catchTr);
        console.log($tr, i, catchTr);
        $tr.remove();
        catchTr++;
      }
    },

    showMain() {
      console.log("showMain 실행");
      //   let mainTodayDay = document.querySelector("#main-day");
      //   let mainTodayDate = document.querySelector("#main-date");

      this.mainTodayDay = this.dayList[this.today.getDay()];
      this.mainTodayDate = this.today.getDate();
      console.log(this.mainTodayDay, this.mainTodayDate);
    },

    showSetting() {
      console.log("showSetting 실행");
      let clickedDate1 = document.getElementById(this.today.getDate());
      clickedDate1.classList.add("active");
    },

    clickStart() {
      console.log("clickStart 실행");
      for (let i = 1; i <= this.pageYear[this.first.getMonth()]; i++) {
        this.tdGroup[i] = document.getElementById(i);
        // console.log(this.tdGroup[i]);
        this.tdGroup[i].addEventListener("click", this.changeToday);
      }
    },

    changeToday(e) {
      console.log("changeToday 실행");
      for (let i = 1; i <= this.pageYear[this.first.getMonth()]; i++) {
        if (this.tdGroup[i].classList.contains("active")) {
          this.tdGroup[i].classList.remove("active");
          console.log(this.tdGroup[i]);
        }
      }
      let clickedDate1 = e.currentTarget;
      clickedDate1.classList.add("active");
      this.today = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        clickedDate1.id
      );
      this.showMain();
      this.keyValue =
        this.today.getFullYear() +
        "" +
        this.today.getMonth() +
        "" +
        this.today.getDate();
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Pretendard";
  font-weight: 500;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf")
      format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  font-weight: 600;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf")
      format("truetype");
  font-display: swap;
}

html,
body {
  background-color: #ffffff;
  font-family: "Pretendard", sans-serif;
}
.main {
  width: 100%;
  display: block;
}

.content-wrap {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #a8a4ed5b;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
}

.content-left {
  background: #a8a4ed5b;
  color: #fff;
  float: left;
  width: 100%;
  padding-top: 20px;
}

.main-wrap {
  text-align: center;
  padding: 20px 0 0 0;
}
.main-day {
  font-size: 2rem;
  font-weight: 600;
}

.main-date {
  font-size: 8rem;
  font-weight: 600;
  margin: 2rem 0;
}

.content-right {
  float: left;
  width: 100%;
  padding-top: 1.5rem;
  /* padding: 10px; */
}
.sun {
  color: #a8a4edc9;
}
.sat {
  color: #a8a4ed;
}

#calendar {
  /* width: 100%; */
  height: 60%;
  font-size: 0.2rem;
  margin: 0 auto;
}

#calendar-body {
  line-height: 2rem;
  text-align: center;
}

.content-right table tr td {
  width: 4rem;
  height: 4rem;
  text-align: center;
  font-size: 0.1rem;
  font-weight: 600;
}

.active {
  position: absolute;
  background: #a8a4edc9;
  border-radius: 50%;
  color: #ffffff;
}

@media (min-width: 850px) {
  .content-wrap {
    width: 100%;
    /* width: 600px;  */
    height: 460px;
    margin: 0 auto;
    border: 1px solid #a8a4ed5b;
    border-radius: 20px;
    overflow: hidden;
    background: #ffffff;
    box-sizing: border-box;
  }

  .content-left {
    background: #a8a4ed5b;
    color: #fff;
    float: left;
    width: 35%;
    /* width: 200px; */
    height: 600px;
    box-sizing: border-box;
  }

  .main-wrap {
    text-align: center;
    margin: 2rem 0 0 0;
  }

  .main-day {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .main-date {
    font-size: 5rem;
    font-weight: 600;
    margin: 20px 0;
  }

  .content-right {
    float: left;
    /* width: 300px; */
    height: 600px;
    width: 65%;
    padding-top: 50px;
    /* padding: 60px 20px 20px 50px; */
  }
  .sun {
    color: #a8a4edc9;
  }
  .sat {
    color: #a8a4ed;
  }

  .content-right table tr td {
    width: 4rem;
    height: 4rem;
    text-align: center;
    font-size: 0.1rem;
    font-weight: 600;
  }

  .active {
    background: #a8a4edc9;
    border-radius: 50%;
    color: #ffffff;
  }
}
</style>
