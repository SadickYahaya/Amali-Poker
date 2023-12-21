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
        <div class="cards">
          {{ "Custom Card values" }}
          <img src="../../assets/Polygon 2.svg" alt="" />
        </div>
        <div class="accord" v-if="accord">
          <div class="option" v-for="item in accordItem" :key="item">
            <div class="text">
              <input
                type="checkbox"
                class="checkbox"
                :id="item.label"
                :checked="item.selected"
                @click="selectedLabel(item)"
              />
              <label :for="item.label">{{ item.label }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn">
      <button class="crt-btn" @click="navigatePage">Create</button>
      <button class="cancel-btn" @click="$emit('modal')">Cancel</button>
    </div>
    <div>
      <SessionName v-if="showSessionname" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import SessionName from "../../views/SessionName.vue";

let showSessionname = ref(false);
const sessionName = ref("");
let error = ref(false);
const accordItem = ref([
  { label: 1, selected: false },
  { label: 2, selected: false },
  { label: 3, selected: false },
  { label: 5, selected: false },
  { label: 8, selected: false },
  { label: 13, selected: false },
  { label: 21, selected: false },
  { label: 34, selected: false },
  { label: 55, selected: false },
  { label: "?", selected: false },
]);
let accord = ref(false);

const toggleAccord = () => {
  accord.value = true;
};

// const closeAccordion = () => {
//   accord.value = false;
// };
const navigate = useRouter();
const navigatePage = () => {
  if (sessionName.value === "") {
    error.value = !error.value;
  } else {
    localStorage.removeItem("storyTextsNumber");
    localStorage.removeItem("Stories");
    navigate.push("/sessionName");
  }
};

const options = ref(["Fibonacci", "Scrum"]);

let showDropdown = ref(false);
let selectedOption = ref("");
let selectLabel = ref([]);
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  showDropdown.value = false;
};
watch(sessionName, (value) => {
  localStorage.setItem("sessionName", value);
});

const selectedLabel = (item) => {
  item.selected = !item.selected;

  if (item.selected) {
    selectLabel.value.push(item.label);
  } else {
    console.log("error");
  }
  localStorage.setItem("selectLabels", JSON.stringify(selectLabel.value));
};

watch(selectedOption, (newOption) => {
  if (newOption === "Fibonacci") {
    accordItem.value = [
      { label: 1, selected: false },
      { label: 2, selected: false },
      { label: 3, selected: false },
      { label: 5, selected: false },
      { label: 8, selected: false },
      { label: 13, selected: false },
      { label: 21, selected: false },
      { label: 34, selected: false },
      { label: 55, selected: false },
      { label: "?", selected: false },
    ];
  } else if (newOption === "Scrum") {
    accordItem.value = [
      { label: 0.5, selected: false },
      { label: 1, selected: false },
      { label: 2, selected: false },
      { label: 3, selected: false },
      { label: 4, selected: false },
      { label: 5, selected: false },
      { label: 6, selected: false },
      { label: 7, selected: false },
      { label: "?", selected: false },
    ];
  } else {
    accordItem.value = [];
  }
});
</script>

<style scoped>
h3 {
  color: #474d66;
  font-size: 23px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
}

.main-container {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fdf5f2;
  max-width: 623px;
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
input {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  color: #474d66;
}

.selected-option {
  width: 185px;
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
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
}

.options {
  position: fixed;
  z-index: 999;
  background-color: #fdf5f2;
  width: 185px;
  padding: 13px 20px;
}

.options,
.selected-option,
.card-option:hover {
  cursor: default;
}

.accord {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  background-color: #fdf5f2;
  margin: 24px;
  gap: 20px;
}

.text {
  display: flex;
  margin: 10px;
}

.checkbox {
  width: 30px;
  color: #fdf5f2;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.story {
  display: flex;
  margin: 24px;
  background-color: #fdf5f2;
}
</style>
