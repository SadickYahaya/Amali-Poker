<template>
  <div class="modal">
    <div class="modal-content">
      <span class="material-icons"> close_small </span>
      <h1>Create New Story</h1>
      <div class="textarea">
        <TextAreaComponent />
      </div>
      <div class="button">
        <ButtonComponent
          v-for="(item, index) in buttItems"
          :key="index"
          :text="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../../components/Buttons/ButtonComponent.vue";
import TextAreaComponent from "../TextArea/InputFieldComponent.vue";
// import CloseIcon from "../../assets/closeIcon.png";
import { ref } from "vue";

const buttItems = ref(["Upload", "Save"]);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 20%;
  left: 30%;
  width: 703px;
  height: 365px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: rgba(253, 245, 242, 1);
  border: none;
}

.button {
  display: flex;
  margin: 60px 0 0px 100px;
  gap: 130px;
}
h1 {
  margin-top: 40px;
  text-align: center;
  color: rgba(71, 77, 102, 1);
  font-weight: 700px;
  font-size: 34px;
  line-height: 41.15px;
  font-family: "Inter", sans-serif;
}

.textarea {
  margin: 30px 0 0 40px;
}

span {
  position: fixed;
  right: 17%;
  top: 21%;
  cursor: pointer;
}
</style>
