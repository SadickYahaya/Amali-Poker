<template>
  <SessionName>
    <div class="main">
      <h1>USER STORY ONE</h1>
      <div class="content">
        <div class="eclipse">
          <div class="inner">
            <h4>Estimation:</h4>
            <h4>28%</h4>
          </div>
        </div>

        <div class="list">
          <ul>
            <li>28% (Zion)</li>
            <br />
            <li>28% (Emmanuel)</li>
            <br />
            <li>28% (Albert)</li>
          </ul>
        </div>
      </div>
      <div class="foot">
        <div class="top">
          <p>Story List</p>
          <p>Add Stories +</p>
        </div>
        <div class="down">
          <div
            class="FieldOne"
            v-for="(item, index) in getStories"
            :key="index"
          >
            <ul>
              <li>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SessionName>
</template>

<script setup>
import SessionName from "./SessionName.vue";

const getStories = JSON.parse(localStorage.getItem("Stories")) || [];
</script>

<style scoped>
.main {
  width: 505px;
  height: 100vh;
  background-color: #fdf5f2;
  /* margin: 100px; */
  /* width: 40%; */
  border-radius: 8px;
  margin: 40px;
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 12%;
}
.eclipse {
  width: 200px;
  height: 200px;
  background: linear-gradient(0deg, #dd5928, #dd5928),
    linear-gradient(0deg, #ffffff, #ffffff);
  border: 1px solid #ffffff;
  border-radius: 50%;
}

.eclipse {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #ffffff;
}

.inner {
  text-align: center;
  margin: 70px auto;
  gap: 10px;
  display: flex;
  flex-direction: column;
}

p {
  display: flex;
  justify-content: center;
  color: #ffffff;
}

.list {
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  transform: translate(0, 40px);
}

h1 {
  transform: translate(250px, 20px);
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  height: 31px;
}

.top {
  display: flex;
  justify-content: space-between;
}
.down {
  width: 100%;
  /* height: 192px; */
  border-radius: 8px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  background: #fdf5f2;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #474d66;
}
.top p {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #474d66;
}

.FieldOne,
.FieldTwo {
  background-color: #d9d9d9;
  padding: 3%;
  width: 100%;
}
</style>
