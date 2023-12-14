<template>
  <div class="main-container" :style="{ backgroundImage: `url(${Img})` }">
    <div class="logo">
      <img :src="Logo" alt="" />
    </div>

    <div class="main">
      <div class="left">
        <slot></slot>
      </div>

      <div class="right">
        <div class="right">
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
    </div>
  </div>
</template>

<script setup>
import Logo from "../assets/hamburger.png";
import Img from "../assets/group.svg";
import addImage from "../assets/addImage.png";

</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
}
.main {
  width: 100%;
  height: 95.9vh;
  display: flex;
}

.left {
  width: 60%;
  /* background-color: blue; */
}
.right {
  width: 40%;
  /* background-color: red; */
}
.logo {
  margin-top: 11px;
  margin-left: 50px;
}
.session {
  width: 397px;
  text-align: center;
  transform: translate(5%, -10%);
}
h1 {
  line-height: 78px;
  font-size: 52px;
  font-weight: 700;
}
.display {
  width: 397px;
  height: 526px;
  border-radius: 8px;
  background-color: rgba(253, 245, 242, 1);
  transform: translate(5%, 3%);
}
.display, .session {
  margin-left: 100px;
}
h2 {
  justify-content: center;
  align-items: center;
}
.head {
  background-color: rgba(228, 122, 83, 1);
  color: white;
  height: 65px;
  border-radius: 8px;
}
.top {
  padding: 20px;
  display: flex;
}
.invite {
  display: flex;
  transform: translate(140px, -10px);
  gap: 5px;
}
.invite h3 {
  transform: translate(0, 5px);
}
.players {
  margin-left: 50px;
  border-radius: 8px;
}
.head h2 {
  padding: 10px;
  text-align: center;
}
.players ul li {
  font-style: bold;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 14px;
}
button {
  border: none;
  box-shadow: 3em;
}
.vote button {
  width: 127px;
  height: 40px;
  color: white;
  background-color: rgba(228, 122, 83, 1);
  border-radius: 8px;
  transform: translate(135px, 15px);
  padding: 8px 16px 8px 16px;
  text-align: center;
}
.vote button h3 {
  font-size: 32px;
  font-weight: bold;
  transform: translate(0, -25%);
}
hr {
  width: 267px;
  border: 1px solid rgba(216, 218, 229, 1);
}
#hr1 {
  transform: translate(65px, -15px);
}
#hr2 {
  transform: translate(65px, -5px);
} 

</style>
