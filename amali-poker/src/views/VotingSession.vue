<template>

    <div class="main">
      <h1>USER STORY ONE</h1>
      <div class="content">
        <div class="eclipse">
          <div class="inner">
          <h4>Estimation:</h4>
          <h4>28%</h4>
        </div>
      </div>

        <div class="list">
          <ul>
            <li>28% (Zion)</li> <br>
            <li>28% (Emmanuel)</li> <br>
            <li>28% (Albert)</li>
          </ul>
        </div>
      </div>
      <div class="foot">
        <div class="top">
          <p>Story List</p>
          <p>Add Stories +</p>
        </div>
        <div class="down">
          <div class="FieldOne">
            <!--     -->
          </div>
          <div class="FieldTwo"></div>
        </div>
      </div>

  

      


    
    </div>
</template>

<script setup>
import SessionName from "./SessionName.vue";
</script>

<style scoped>
.main {
  background-color: #fdf5f2;
  /* transform: scale(0.8); */
  margin: 100px;
  /* transform: translate(50%, 10%); */
  width: 40%;
  height: 421px;
  border-radius: 8px;
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 12%;
}
.eclipse {
  width: 200px;
  height: 200px;
  background: linear-gradient(0deg, #DD5928, #DD5928),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
  border: 1px solid #FFFFFF;
  border-radius: 50%;
}

.eclipse {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #ffffff;
}

.inner{
  text-align: center;
  margin: 70px auto;
  gap: 10px;
  display: flex;
  flex-direction: column;
}


p {
  display: flex;
  justify-content: center;
  color: #ffffff;
}

.list {
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  transform: translate(0, 40px);
}

h1 {
  transform: translate(250px, 20px);
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  height: 31px;
  
}

.top {
  display: flex;
  justify-content: space-between;
}
.down {
  width: 100%;
  /* height: 192px; */
  border-radius: 8px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  background: #fdf5f2;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #474d66;
}
.top p {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #474d66;
}

.FieldOne, .FieldTwo{
  background-color: #D9D9D9;
  padding: 3%;
  width: 100%;
}

</style>
