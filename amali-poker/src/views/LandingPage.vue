<template>
  <div>
    <div class="container">
      <div class="bg-img"><img src="../assets/left2-image.svg" alt="" /></div>

      <div class="content-wrapper">
        <div class="info-text">
          <div class="title">
            <h1><span id="Amali">Amali</span><span id="Poker">Poker</span></h1>
          </div>
          <div class="description">
            <p>
              Amalipoker facilitates sprint planning with a dynamic,
              user-friendly platform. Real-time multiplayer sessions, intuitive
              design, and strategic <br />features streamline collaboration for
              effective <br />planning and decision-making
            </p>
          </div>

          <div class="button">
            <button @click="showModal">Get Started</button>
          </div>
        </div>
      </div>

      <div class="bg-img"><img src="../assets/right-image2.svg" alt="" /></div>
    </div>

    <div class="icons-wrapper">
      <div class="icons">
        <div class="icon-section">
          <img src="../assets/Vector.svg" alt="" />
          <p>
            Sprint Plan <br />
            Effortlessly
          </p>
        </div>

        <div class="icon-section">
          <img src="../assets/icon2.svg" alt="" />
          <p>Estimate Like An <br />Expert</p>
        </div>

        <div class="icon-section">
          <img src="../assets/icon3.svg" alt="" />
          <p>
            Play Online <br />
            Anywhere
          </p>
        </div>
      </div>
    </div>
    <div class="story-modal">
      <NewSessionModal v-if="modalView" @modal="closeModal" />
      <div class="modal-overlay" v-if="modalView"></div>
    </div>
  </div>
</template>

<script setup>
import NewSessionModal from "@/components/Modals/NewSessionModal.vue";
import { ref } from "vue";

let modalView = ref(false);
const showModal = () => {
  modalView.value = true;
  localStorage.removeItem("selectLabels");
};

const closeModal = () => {
  modalView.value = false;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Poppins:ital,wght@0,200;0,500;0,600;1,800&display=swap");

.logo img {
  width: 150px;
  margin: 10px;
  padding: 5px;
}
.container {
  margin-top: 140px;
  display: flex;
  justify-content: center;
  background-size: contain;
}

.info-text {
  width: 600px;
  justify-content: center;
  margin: auto;
}

#Amali {
  color: orange;
}

#Poker {
  color: gray;
}
.container h1 {
  font-size: 64px;
  font-family: "Poppins";
}

.container p {
  font-family: "Poppins";
  font-weight: 200;
  color: #101840;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
  margin-left: 30px;
}

.bg-img {
  width: 100%;
  align-items: center;
}

.bg-img img {
  width: 100%;
}
.button {
  margin-top: 36px;
}

button {
  height: 50px;
  width: 20%;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  font-family: "Poppins";
  background: rgb(245, 118, 44);
  color: white;
}

button:hover {
  cursor: pointer;
  background: rgb(255, 136, 0);
}

.icons-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
}
.icons {
  display: flex;
  gap: 160px;
  padding-top: 90px;
  width: 900px;
  flex-wrap: wrap;
  justify-content: center;
}

.icons img {
  width: 100px;
  height: 80px;
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
