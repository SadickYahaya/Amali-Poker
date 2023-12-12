<template>
  <div class="modal">
    <div class="modal-content">
      <h1>Create New Story</h1>
      <div class="textarea">
        <TextAreaComponent />
      </div>
    </div>
    <div class="button-container">
      <div class="button">
        <ButtonComponent
          v-for="(item, index) in buttItems"
          :key="index"
          :text="item"
          :index="index"
          @toggle="emit('click')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../../components/Buttons/ButtonComponent.vue";
import TextAreaComponent from "../TextArea/InputFieldComponent.vue";
import { ref } from "vue";
import { defineEmits } from "vue";

const buttItems = ref(["Save", "Cancel"]);

const emit = defineEmits(["click"]);
</script>

<style scoped>
.modal {
  position: fixed;
  bottom: 9%;
  left: 18%;
  width: 703px;
  border-radius: 8px;
  background-color: #fff;
  margin: 180px auto;
  padding: 10px 16px;
  z-index: 999;
}

h1 {
  color: #474d66;
  font-weight: 700px;
  font-size: 34px;
  font-weight: 700px;
  margin: 24px 0 24px 0;
}

.button {
  max-width: 86px;
  display: flex;
  justify-content: flex-start;
  /* margin: 30px 10px 24px 450px; */
  gap: 16px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin: 24px;
  margin-right: 136px;
}

.modal-content {
  margin: 0 31px 0 31px;
}
</style>
