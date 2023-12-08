<template>
  <div class="main">
      <div class="navLogo">
       
      </div>

    <p>Dashboard</p>

    <div class="sessions">
      <div class="first"><h3>New Session</h3></div>
      <div class="second"><h3>View Recent Session</h3></div>
    </div>
  </div>
</template>

<script setup>
</script>


<style scoped>

body {
  box-sizing: border-box;
  /* background-image: url(../assets/); */
}
.main {
  background-image: url(..);
}
.navLogo, img {
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
  background: linear-gradient(247.96deg, #DD5928 -19.99%, #B5461D 121.42%),
  linear-gradient(0deg, #F2BEAB, #F2BEAB);
  border: 2px solid #F2BEAB;
  
}

h3 {
  margin-left: 4%;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;

}

</style>
