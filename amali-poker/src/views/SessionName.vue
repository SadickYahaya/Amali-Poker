<template>
  <main>
    <div>
      <div class="logo">
        <img :src="Logo" alt="" />
      </div>
    </div>
    <div class="main-container">
      <div class="main">
        <div class="left">
          <slot></slot>
        </div>
        <div class="right">
          <div class="session">
            <h1>{{ storedItem }}</h1>
          </div>
          <div class="display">
            <div class="head">
              <h2>{{ storyNumber }} story created</h2>
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
              <div class="btn-container">
                <div class="top-btn">
                  <div class="re-vote-btn" @click="navigatePage">
                    <button>Re-Vote</button>
                  </div>
                  <div class="end-session-btn">
                    <button>End Session</button>
                  </div>
                </div>
                <div class="down-btn">
                  <div class="cancel-Session-btn">
                    <button>Cancel Session</button>
                  </div>
                  <div class="reveal-Card-btn">
                    <button>Reveal Card</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import Logo from "../assets/hamburger.png";
// import Img from "../assets/group.svg";
import addImage from "../assets/addImage.png";
import { useRouter } from "vue-router";

const storedItem = localStorage.getItem("sessionName");
const storyNumber = localStorage.getItem("storyTextsNumber");
let navigate = useRouter();
const navigatePage = () => {
  navigate.push("/votingsession");
};
</script>
<style scoped>
main {
  background: url(../assets/group.svg);
  overflow: hidden;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
/* .main-container {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
.left {
  /* transform: translate(70px, 10px); */
  transform: scale(0.8);
  margin-bottom: 100px;
}
.right {
  margin-left: 70px;
  transform: scale(0.8);
  margin-right: 100px;
}

.logo img {
  margin-top: 31px;
  margin-left: 50px;
}
.main {
  display: flex;
}
.session {
  width: 397px;
  text-align: center;
  transform: translate(120px, -70px);
}
h1 {
  line-height: 78px;
  font-size: 52px;
  font-weight: 700;
  line-height: 45px;
}
.display {
  width: 397px;
  height: 506px;
  border-radius: 8px;
  background-color: rgba(253, 245, 242, 1);
  transform: translate(120px, -60px);
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
.players ul li {
  font-style: bold;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 14px;
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
  transform: translate(0, -8px);
}
.head h2 {
  padding: 10px;
  text-align: center;
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

.btn-container {
  margin-top: 10px;
  margin-left: 65px;
}

.top-btn {
  display: flex;
}

.re-vote-btn button {
  height: 28px;
  width: 132px;
  background: #c93900;
  color: white;
  border-radius: 10px;
  border: 1px;
  margin-right: 10px;
  font-size: 16px;
}
.re-vote-btn button:hover {
  background: white;
  color: #c93900;
}

.end-session-btn button {
  height: 28px;
  width: 132px;
  background: #c93900;
  color: white;
  border-radius: 10px;
  border: 1px;
  font-size: 16px;
}
.end-session-btn button:hover {
  background: white;
  color: #c93900;
}

.down-btn {
  display: flex;
  margin-top: 20px;
}

.cancel-Session-btn button {
  height: 28px;
  width: 132px;
  background: #c93900;
  color: white;
  border-radius: 10px;
  border: 1px;
  margin-right: 10px;
  font-size: 16px;
}
.cancel-Session-btn button:hover {
  background: white;
  color: #c93900;
}

.reveal-Card-btn button {
  height: 28px;
  width: 132px;
  background: #c93900;
  color: white;
  border-radius: 10px;
  border: 1px;
  font-size: 16px;
}
.reveal-Card-btn button:hover {
  background: white;
  color: #c93900;
}
</style>
