<template>
  <SessionName>
    <div class="main">
      <h1>USER STORY ONE</h1>
      <div class="content">
        <div class="eclipse">
          <p class="players"></p>
          <p class="voted"></p>
          <p class="avg"></p>
        </div>
        <div class="list">
          <h2>Estimation:</h2>
          <ul>
            <li>0</li>
            <ul>
              28% (Zion)<br /><br />
            </ul>
            <li>0</li>
            <ul>
              28% (Emmanuel)<br /><br />
            </ul>
            <li>0</li>
            <ul>
              28% (Olivia)<br /><br />
            </ul>
            <li>0</li>
            <ul>
              28% (Albert)<br /><br />
            </ul>
          </ul>
        </div>
      </div>
      <div class="foot">
        <div class="top">
          <p>Active Stories</p> 
          <p>Completed Stories</p>
          <p>All Stories</p>
        </div>
        <div class="down"><span>Story One</span><span>28%</span></div>
      </div>

  

      


    
    </div>
  </SessionName>
</template>

<script setup>
import SessionName from "./SessionName.vue";

const storylist = localStorage.getItem('lines')
console.log(storylist, 'list');
// const storylist = lines.map(())
</script>

<style scoped>
.main {
  max-width: 50%;
  height: 502px;
  background-color: #fdf5f2;
  position: relative;
  transform: translate(50%, 6%);
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 4%;
  padding: 0%;
  transform: translate(0, 40px);
}
.eclipse {
  width: 30%;
  height: 30vh;
  /* padding: 20Px; */
  background-color: #dd5928;
  border-radius: 50%;
  transform: translate(-54px);
}
.eclipse,
.players {
  font-size: 41px;
  font-weight: 700;
  line-height: 50px;
  color: #fdf5f2;
}
.eclipse,
.voted {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #ffffff;
}
.eclipse,
.avg {
  top: 561px;
  left: 297px;
  color: #ffffff;
}
p {
  display: flex;
  justify-content: center;
  color: #ffffff;
}
h2 {
  transform: translate(0, -20px);
}
.list {
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  transform: translate(0, 30px);
}
ul {
  display: contents;
}
h1 {
  transform: translate(250px, 20px);
  font-size: 27px;
  font-weight: 700;
  line-height: 33px;
  height: 31px;
}
.foot {
  transform: translate(0px, 15px);
}
.top {
  display: flex;
  justify-content: space-between;
  transform: translate(0%, 170%);
  margin-top: 15%;
}
.down {
  transform: translate(-2px, 80%);
  display: flex;
  justify-content: space-between;
  padding: 4%;
  background: #fdf5f2;
  margin-top: 1%;
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
</style>
