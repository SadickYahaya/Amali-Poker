<template>
  <LayOut>
    <div class="main">
      <div class="navLogo">
        <img :src="Image" alt="" />
      </div>

      <p>Dashboard</p>

      <div class="sessions">
        <div class="first" @click="showModal"><h3>New Session</h3></div>
        <div class="second" @click="navigatePage">
          <h3>View Recent Session</h3>
        </div>
      </div>
      <div class="story-modal">
        <NewSessionModal v-if="modalView" @modal="closeModal" />
        <div class="modal-overlay" v-if="modalView"></div>
      </div>
    </div>
  </LayOut>
</template>

<script setup>
import { ref } from "vue";
import LayOut from "@/LayOut/LayOut.vue";
import Image from "../assets/hamburger.png";
import NewSessionModal from "@/components/Modals/NewSessionModal.vue";
import { useRouter } from "vue-router";

let modalView = ref(false);
const showModal = () => {
  modalView.value = true;
};

const closeModal = () => {
  modalView.value = false;
};

const navigate = useRouter();
const navigatePage = () => {
  navigate.push("/recentsession");
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.main p {
  font-family: Poppins;
  font-size: 52px;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
  position: absolute;
  top: 3%;
  left: 70%;
  color: #474d66;
  margin: 22px;
}

.sessions {
  display: flex;
  justify-content: center;
  gap: 113px;
  margin-top: 10%;
}

img {
  margin: 42px;
  width: 30px;
}

.first,
.second {
  width: 32%;
  height: 290px;
  border-radius: 16px;
  font-size: 32px;
  box-shadow: 10px 15px 7px 0px #00000040;
  background: linear-gradient(248deg, #dd5928 -19.99%, #b5461d 121.42%);
  color: #fff;
  padding: 25px;
  cursor: pointer;
}

h3 {
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
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
