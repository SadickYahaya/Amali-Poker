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
  color: #474d66;
  margin: 22px;
}

.sessions {
  display: flex;
  justify-content: center;
  gap: 3%;
  margin-top: 10%;
}

img {
  margin: 42px;
}

.first,
.second {
  width: 32%;
  height: 290px;
}

h3 {
  margin-left: 4%;
  font-size: 32px;
  font-weight: 700;
}
</style>
