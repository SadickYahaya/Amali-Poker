<template>
  <div>
    <textarea
      name=""
      id=""
      cols="3"
      rows="4"
      value=""
      placeholder="Put your stories in here. Each line is a new story"
      v-model="storyInput"
      @input="processStoryInput"
    >
    </textarea>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const storyInput = ref("");
const storyTexts = ref([]);

const processStoryInput = () => {
  const lines = storyInput.value.split("\n");

  const nonEmptyLines = lines.filter((line) => line.trim() !== "");

  storyTexts.value = nonEmptyLines;

  console.log(storyTexts.value);
};

//Watching Story Entered
watch(storyTexts, (value) => {
  const storyNumber = value.length;
  localStorage.setItem("storyTextsNumber", storyNumber);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap");

div {
  width: 100%;
}

textarea {
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 6px;
  font-size: 20px;
  line-height: 24.2px;
  color: rgba(71, 77, 102, 1);
  background-color: #ffffff;
  width: 100%;
  outline: 0;
  padding: 3px;
  resize: none;
  font-family: "Inter", sans-serif;
}
</style>
