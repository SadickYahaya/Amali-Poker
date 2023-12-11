<template>
  <div class="main-container" :style="{ backgroundImage: `url(${Img})` }">
    <div class="logo">
      <img :src="Logo" alt="" />
    </div>

    <div class="main">
      <div class="right">
        <slot></slot>
      </div>

      <div class="left">
        <div class="session">
          <h1>Story Name</h1>
        </div>

        <div class="display">
          <div class="head">
            <h2>1 story created</h2>
          </div>
          <div class="content">
            <div class="top">
              <h3>Players: 6</h3>
              <div class="invite">
                <button>
                  <img :src="addImage" alt="" />
                </button>
                <h3>invite</h3>
              </div>
            </div>
            <hr id="hr1" />
            <div class="players">
              <ul>
                <li>Zion</li>
                <li>Olivia</li>
                <li>Nii</li>
                <li>Osborn</li>
                <li>Albert</li>
                <li>Joseph</li>
              </ul>
            </div>
            <hr id="hr2" />
            <div class="vote">
              <button>
                <h3>Vote</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <NewStoryModal /> -->
  </div>
</template>

<script setup>
// import NewStoryModal from "../components/Modals/NewStoryModal.vue";
// import { ref } from "vue";
import Logo from "../assets/hamburger.png";
import Img from "../assets/group.svg";
import addImage from "../assets/addImage.png";

// let showModal = ref(true);
</script>

<style scoped>
/* .main-container {
  background-image: url(../../assets/Group\ 633208.svg);
} */
.logo {
  width: Hug (40px);
  height: Hug (32px);
  margin-top: 41px;
  margin-left: 70px;
  gap: 4px;
}
.main {
  display: flex;
}
.container {
  width: 683px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  transform: translate(160px, 100px);
}
.left {
  transform: translate(150px);
}

.session {
  width: 397px;
  text-align: center;
  transform: translate(240px, -20px);
}

h1 {
  line-height: 78px;
  font-size: 52px;
  font-weight: 700;
}

.display {
  width: 397px;
  height: 596px;
  /* margin-top: 72px; */
  /* margin-left: 250px; */
  border-radius: 8px;
  background-color: rgba(253, 245, 242, 1);
  /* margin-bottom: 114px; */
  transform: translate(250px, 20px);
}

h2 {
  justify-content: center;
  align-items: center;
}
.head {
  background-color: rgba(228, 122, 83, 1);
  color: white;
  width: 397px;
  height: 65px;
  top: 273px;
  left: 954px;
  border-radius: 8px;
}
.top {
  padding: 30px;
  display: flex;
}
.invite {
  display: flex;
  transform: translate(150px, -10px);
  gap: 5px;
}
.invite h3 {
  transform: translate(0, 5px);
}
.players {
  width: Hug (121px);
  height: Fixed (281px);
  transform: translate(80px);
  border-radius: 8px;
}
.players ul li {
  font-style: bold;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 24px;
}
button {
  border: none;
  box-shadow: 2em;
  padding: 10px;
}
.vote button {
  width: 127px;
  height: 40px;
  color: white;
  background-color: rgba(228, 122, 83, 1);
  border-radius: 8px;
  transform: translate(135px, 45px);
  padding: 8px 16px 8px 16px;
  text-align: center;
}

.vote button h3 {
  width: 95px;
  height: 24px;
  font-size: 32px;
  font-weight: bold;
  transform: translate(0, -8px);
}
.head h2 {
  padding: 20px;
  text-align: center;
}

hr {
  width: 267px;
  border: 1px solid rgba(216, 218, 229, 1);
}
#hr1 {
  transform: translate(65px, -25px);
}
#hr2 {
  transform: translate(65px, 15px);
}
</style>
