<template>
  <div class="main-container">
    <h3>Create a New Session</h3>

    <!--Details session-->

    <div class="flex-box">
      <input
        v-model="sessionName"
        type="text"
        placeholder="Enter session name"
        class="session-name"
        :style="[error && { border: '1px solid red' }]"
      />

      <!-- Customised Select Option with Dropdowns -->
      <div class="custom-select">
        <div class="selected-option" @click="toggleDropdown">
          {{ selectedOption || "Fibonacci" }}
          <img src="../../assets/Polygon 2.svg" alt="" />
        </div>
        <div class="options" v-if="showDropdown">
          <div
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
          >
            <p>{{ option }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-select">
      <div class="card-option" @click="toggleAccord">
        {{ "Custom Card values" }}
        <img src="../../assets/Polygon 2.svg" alt="" />
      </div>
      <div class="accord" v-if="accord">
        <div class="option" v-for="item in accordItem" :key="item">
          <div class="text">
            <input type="checkbox" class="checkbox" />
            <label for="item">{{ item }}</label>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in storyTexts" :key="item" class="stories">
      <div class="story">
        <input type="checkbox" class="checkbox" />
        <p>{{ item }}</p>
      </div>
    </div>

    <div class="btn">
      <button class="crt-btn" @click="navigatePage">Create</button>
      <button class="cancel-btn" @click="$emit('modal')">Cancel</button>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const sessionName = ref("");
let error = ref(false);
const accordItem = ref([0, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
const storyTexts = ref([
  "Do you want to enter stories in this room",
  "Request confirmation when skipping sotries?",
  "Do you want to reveal individual votes when voting completed?",
]);
let accord = ref(false);

const toggleAccord = () => {
  accord.value = !accord.value;
};
const navigate = useRouter();
const navigatePage = () => {
  if (sessionName.value === "") {
    error.value = !error.value;
  } else {
    navigate.push("/sessionName");
  }
};

const options = ref([
  "Fibonacci",
  "Scrum",
  "Sequential",
  "Playing Cards",
  "T-Shirts",
  "Coffee",
]);

let showDropdown = ref(false);
let selectedOption = ref("");

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  console.log(option);
  showDropdown.value = false;
};
watch(sessionName, (value) => {
  localStorage.setItem("sessionName", value);
});

watch(selectedOption, (newOption) => {
  if (newOption === "Fibonacci") {
    accordItem.value = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, "Coffee"];
  } else if (newOption === "Scrum") {
    (accordItem.value = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40]), "Coffee";
  } else if (newOption === "T-Shirts") {
    accordItem.value = ["XS", "S", "M", "L", "XL", "XXL", "Coffee"];
  } else {
    accordItem.value = [0, 1, 2, 3, 4, 5, 6, 7];
  }
});
</script>

<style scoped>
h3 {
  color: #474d66;
  font-size: 23px;
  text-align: center;
  text-decoration: 1.4px underline;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
}

.main-container {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fdf5f2;
  max-width: 623px;
  height: 449px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  z-index: 999;
}

.flex-box {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 575px;
  margin: 24px;
}
.selected-option,
.card-option,
input {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
}

.selected-option {
  width: 185px;
}

.selected-option:focus {
  border-width: 0;
  border: none;
}

.session-name {
  background-color: #fdf5f2;
  width: 366px;
  font-size: large;
}
.btn {
  display: flex;
  justify-content: space-around;
}

button {
  cursor: pointer;
  background-color: #dd5928;
  color: #fff;
  padding: 8px 16px;
  width: 186px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  height: 48px;
  margin: 20px;
}

.card-option {
  width: 575px;
  margin: 24px;
}

.options {
  position: fixed;
  z-index: 999;
  background-color: white;
  width: 185px;
  padding: 10px;
}

.options:hover {
  cursor: default;
}

.accord {
  position: fixed;
  top: 40%;
  z-index: 999;
  width: 575px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  margin: 24px;
  gap: 20px;
}

.text {
  display: flex;
  margin: 10px;
}

.checkbox {
  width: 30px;
}

.story {
  display: flex;
  margin: 24px;
}
</style>
