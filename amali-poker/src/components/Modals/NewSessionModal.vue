<template>
  <div class="main-container">
    <h3>Create a New Session</h3>

    <!--Details session-->
    <div class="sub-container">
      <div class="flex-box">
        <input type="text" id="input-box" placeholder=" Enter session name" />

        <div>
          <select id="list">
            <option value="Fibonacci">Fibonacci</option>
            <option value=" scrum">scrum</option>
            <option value=" playing card">playing card</option>
            <option value="sequential">sequential</option>
            <option value=" T-shirt">T-shirt</option>
          </select>
        </div>
      </div>
      <!-- second dropdown-->

      <select id="second-list">
        <option value="Customize Card values">Customize Card values</option>
        <option value=" ">Use all cards</option>
        <option value=" playing card">XS</option>
        <option value="sequential">S</option>
        <option value=" T-shirt">M</option>
        <option value=" T-shirt">L</option>
        <option value=" T-shirt">XL</option>
        <option value=" T-shirt">XXL</option>
      </select>

      <div class="maim-ckbox">
        <label class="check-container">
          <input type="checkbox" id="ck-bx" />
          <span class="checkmark"
            >Do you want to enter stories in this room?</span
          >
        </label>
        <br />
        <label class="check-container">
          <input type="checkbox" id="ck-bx" />
          <span class="checkmark"
            >Do you want to enter stories in this room?</span
          >
        </label>
        <br />
        <label class="check-container">
          <input type="checkbox" id="ck-bx" />
          <span class="checkmark"
            >Do you want to enter stories in this room?</span
          > </label
        ><br />
        <label class="check-container">
          <input type="checkbox" id="ck-bx" />
          <span class="checkmark"
            >Do you want to enter stories in this room?</span
          >
        </label>
      </div>

      <div class="btn">
        <button class="crt-btn" @click="navigatePage">create</button>
        <button class="cancel-btn" @click="$emit('modal')">cancel</button>
      </div>
    </div>
  </div>
  <!-- <div><NewStoryModal v-if="modalView" /></div> -->
</template>

<script setup>
import { useRouter } from "vue-router";

const navigate = useRouter();
const navigatePage = () => {
  navigate.push("/sessionName");
};
</script>

<style scoped>
h3 {
  color: #474d66;
  margin: 24px auto;
  padding: 2px;
  line-height: 29.05px;
  width: 256px;
  font-size: 23px;
  text-align: center;
  text-decoration: 1.4px underline;
  font-family: "Poppins", sans-serif;
}

.main-container {
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  background-color: #fdf5f2;
  width: 623px;
  height: 449px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.sub-container {
  width: 575px;
  height: 352px;
  margin: 24px auto;
  border-radius: 8px;
}

.flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#input-box {
  padding: 16px;
  width: 420px;
  height: 51px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background-color: #fdf5f2;
  font-family: "Poppins", sans-serif;
}

#second-list {
  width: 575px;
  height: 51px;
  padding: 16px;
  border: 1px solid #d9d9d9;
  margin: 16px 0px;
  border-radius: 8px;
  background-color: #fdf5f2;
  font-family: "Poppins", sans-serif;
  outline: 0;
}
#list {
  width: 140px;
  height: 51px;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #d9d9d9;
  font-family: "Poppins", sans-serif;
  background-color: #fdf5f2;
  outline: 0;
}
.maim-ckbox {
  width: 383px;
  height: 150px;
}
.check-container {
  gap: 10px;
}
.checkmark {
  margin: 0em 5px;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  padding: 30px 0px;
}
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.crt-btn {
  background-color: #dd5928;
  color: #fff;
  padding: 8px 16px;
  width: 186px;
  height: 48px;
  text-decoration-line: underline;
  border: none;
  border-radius: 8px;
}
.cancel-btn {
  background-color: #dd5928;
  color: #fff;
  padding: 8px 16px;
  width: 186px;
  height: 48px;
  text-decoration-line: underline;
  border: none;
  border-radius: 8px;
}
</style>
