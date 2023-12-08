<template>
  <LayOut>
    <div class="main">
      <div class="navLogo">
        <img :src="Image" alt="" />
      </div>

      <p>Dashboard</p>

      <div class="sessions">
        <div class="first" @click="navigatePage"><h3>New Session</h3></div>
        <div class="second"><h3>View Recent Session</h3></div>
      </div>
    </div>
  </LayOut>
</template>

<script setup>
import Image from "../assets/logo.svg";
import { useRouter } from "vue-router";
import LayOut from "../LayOut/LayOut.vue";
const navigate = useRouter();

const navigatePage = () => {
  navigate.push("/sessionName");
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.navLogo,
img {
  margin: 2%;
  width: 40px;
  /* height: 32px; */
}

.main p {
  font-family: Poppins;
  font-size: 52px;
  font-weight: 700;
  line-height: 78px;
  letter-spacing: 0em;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 70%;
}

.sessions {
  display: flex;
  justify-content: center;
  gap: 3%;
  margin-top: 10%;
}

.first,
.second {
  width: 32%;
  height: 290px;
  border-radius: 18px;
  border: 2px solid;
  font-size: 32px;
  box-shadow: 10px 15px 7px 0px #00000040;
}

h3 {
  margin-left: 4%;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
