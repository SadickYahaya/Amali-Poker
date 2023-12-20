<template>
  <SessionName>
    <div class="container">
      <div
        class="flex-container"
        v-for="(item, index) in getLabel"
        :key="index"
      >
        <div class="inner">{{ item }}</div>
      </div>
    </div>
  </SessionName>
  <div class="modal-overlay" v-if="modalShow"></div>
  <NewStoryModal @click="pageRefresh" @change="closeModal" v-if="modalShow" />
</template>
<script setup>
import SessionName from "../views/SessionName.vue";
import { ref } from "vue";
import NewStoryModal from "../components/Modals/NewStoryModal.vue";

let modalShow = ref(true);
const pageRefresh = () => {
  window.location.reload();
};

const closeModal = () => {
  modalShow.value = false;
};

const getLabel = JSON.parse(localStorage.getItem("selectLabels") || []);
</script>
<style scoped>
.container {
  width: 683px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.inner {
  width: 100px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 1);
  transform: translate(11.5px, 16.5px);
  text-align: center;
  line-height: 100px;
  /* font-size: 22px; */
  font-size: x-large;
  font-weight: 700;
}
.flex-container {
  width: 125px;
  height: 145px;
  background-color: rgba(193, 196, 214, 1);
  color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
}

.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>
