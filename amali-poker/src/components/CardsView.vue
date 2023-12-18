<template>
  <div><NewStoryModal @click="closeModal" v-if="modalShow" /></div>
  <SessionName>
    <div class="container">
      <div class="flex-container" v-for="item in getItem" :key="item">
        <div class="inner">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="modal-overlay" v-if="modalShow"></div>
  </SessionName>
</template>
<script setup>
import SessionName from "../views/SessionName.vue";
import NewStoryModal from "./Modals/NewStoryModal.vue";
import { ref } from "vue";

let modalShow = ref(true);
const closeModal = () => {
  modalShow.value = false;
};

const getItem = localStorage.getItem("selectLabels");
</script>
<style scoped>
.container {
  width: 683px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  transform: translate(90px, 30px);
}
.inner {
  /* width: 85px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 1);
  transform: translate(11.5px, 16.5px);
  text-align: center;
  line-height: 100px;
  font-size: xxx-large;
  font-weight: 700; */
}
.flex-container {
  width: 111px;
  height: 145px;
  background-color: rgba(193, 196, 214, 1);
  color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
}

.modal-overlay {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
}
</style>
