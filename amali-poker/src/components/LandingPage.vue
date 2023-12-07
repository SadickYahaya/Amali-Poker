<template>
  <div>
  <div class="container">
    <div class="bg-img"><img src="../assets/left-image.png" alt="" /></div>

    <div class="content-wrapper">
      <div class="info-text">
        <div class="title">
          <h1><span id="Amali">Amali</span><span id="Poker">Poker</span></h1>
        </div>
        <div class="description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,

            <br />Doloremque inventore repudiandae numquam repellendus <br />
            quod aliquam temporibus libero a ipsa impedit, <br />quidem maiores
            reprehenderit.
          </p>
        </div>

        <div class="button">
          <button>Get Started</button>
        </div>
      </div>
    </div>

    <div class="bg-img"><img src="../assets/sssssss.png" alt="" /></div>
  </div>

  <div class="icons-wrapper">
    <div class="icons">
      <div class="icon-section">
        <img src="../assets/noun-plan-6345402.svg" alt="" />
        <p>Sprint Plan Effortlessly</p>
      </div>

      <div class="icon-section">
        <img src="../assets/noun-estimate-2323300.svg" alt="" />
        <p>Estimate Like An Expert</p>
      </div>

      <div class="icon-section">
        <img src="../assets/noun-online-1455728.svg" alt="" />
        <p>Play Online Anywhere</p>
      </div>
    </div>
  </div>
  </div>
</template>


<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Poppins:ital,wght@0,200;0,500;0,600;1,800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins";
}

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

#Amali{
  color: orange;
}

#Poker{
  color: gray;
}
.container h1 {
  font-size: 64px;
  font-family: "Poppins";
}

.container p {
  font-family: "Poppins";
  font-weight: 200;
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
  border-radius: 5px;
  font-family: "Poppins";
}

.icons-wrapper {
  display: flex;
  justify-content: center;
  text-align: center;
}
.icons {
  display: flex;
  gap: 130px;
  padding-top: 90px;
  width: 900px;
  flex-wrap: wrap;
  justify-content: center;
}

.icons img {
  width: 100px;
  height: 80px;
}

.description {
  width: 100%;
}
</style>
