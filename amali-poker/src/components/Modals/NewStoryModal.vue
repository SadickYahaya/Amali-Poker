<template>
  <div class="modal">
    <div class="modal-content">
      <div class="close"><span class="material-icons"> close </span></div>
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
  max-width: 703px;
  flex-direction: column;
  padding: 50px;
  border-radius: 30px;
  background-color: rgba(253, 245, 242, 1);
  margin: 180px auto;
}

h1 {
  text-align: center;
  color: rgba(71, 77, 102, 1);
  font-weight: 700px;
  font-size: 34px;
  line-height: 41.15px;
}

.textarea {
  margin: 30px;
}

.button {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.close {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  color: gray;
}

span {
  padding: 6px;
}

span:hover {
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: rgba(71, 77, 102, 1);
  padding: 6px;
}
</style>
