<template>
  <div class="main-container">
    <h3>Create a New Session</h3>
    <div class="sub-container">
      <div class="flex-box">
        <input type="text" placeholder=" Enter session name" />
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

      <form>
        <input type="checkbox" id="question" />
        <label for="question">Do you want to enter stories in this room?</label
        ><br />

        <input type="checkbox" id="question" />
        <label for="question">Do you want to enter stories in this room?</label
        ><br />

        <input type="checkbox" id="question" />
        <label for="question">Do you want to enter stories in this room?</label
        ><br />

        <input type="checkbox" id="question" />
        <label for="question">Do you want to enter stories in this room?</label
        ><br />

        <input type="checkbox" id="question" />
        <label for="question">Do you want to enter stories in this room?</label>
      </form>

      <div class="btn">
        <button class="crt-btn" @click="storyModal">create</button>
        <button class="cancel-btn">cancel</button>
      </div>
    </div>
    <NewStoryModal v-if="showModal" />
  </div>
</template>

<script setup>
import NewStoryModal from "./NewStoryModal.vue";
import { ref } from "vue";

const showModal = ref(false);
const storyModal = () => {
  showModal.value = true;
};
</script>

<style scoped>
.main-container {
  width: 623px;
  padding: 24px;
  background-color: white;
  position: fixed;
  top: 20%;
  left: 30%;
  z-index: 999;
}

h3 {
  color: #474d66;
  text-decoration: underline;
  text-align: center;
  font-weight: 700px;
}
</style>
