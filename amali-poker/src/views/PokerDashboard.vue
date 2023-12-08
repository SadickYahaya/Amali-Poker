<template>
  <LayOut>
    <div class="main">
      <div class="navLogo">
        <img :src="Logo" alt="" />
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
import Logo from "../assets/hamburger.png"
import { useRouter } from "vue-router";
import LayOut from "../LayOut/LayOut.vue";
const navigate = useRouter();

const navigatePage = () => {
  navigate.push("/sessionName");
};
</script>


<style scoped>
.main{
  width: 100%;
  height: 100vh;
}

.navLogo,
img {
  margin: 21%;
  width: 40px;
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
  box-shadow: 10px 15px 7px 0px #00000040;
  background: linear-gradient(247.96deg, #DD5928 -19.99%, #B5461D 121.42%),
  linear-gradient(0deg, #F2BEAB, #F2BEAB);
  border: 2px solid #F2BEAB;
  color: #FFFFFF;
}

h3 {
  margin-left: 4%;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
}
</style>
