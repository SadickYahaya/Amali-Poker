<template>
  <div class="container">
    <div>
      <div class="Logo">
        <img src="../assets/logo (1).png" alt="" />
      </div>
      <p class="Title">Recent Sessions</p>
    </div>
    <div class="create-button">
      <button>+ Create Project</button>
    </div>
    <table>
      <thead>
        <tr>
          <th class="First">Title</th>
          <th class="Second">Last Used</th>
          <th class="Third">Records</th>
          <th class="Last">Last Story</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Story One</td>
          <td>Record One</td>
          <td>02/02/21</td>
          <td>User Story1</td>
        </tr>
        <tr>
          <td id="Light-color">Story Two</td>
          <td id="Light-color">Record Two</td>
          <td id="Light-color">02/02/21</td>
          <td id="Light-color">User Story2</td>
        </tr>
        <tr>
          <td>Story Three</td>
          <td>Record Three</td>
          <td>02/02/21</td>
          <td>User Story1</td>
        </tr>
        <tr>
          <td>Story Four</td>
          <td>Record Four</td>
          <td>02/02/21</td>
          <td>User Story4</td>
        </tr>
        <tr>
          <td>Story Five</td>
          <td>Record Five</td>
          <td>02/02/21</td>
          <td>User Story5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
.container {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/Group\ 633208.svg);
  overflow: hidden;
}
table {
  width: 65%;
  height: 40vh;
  background-color: #fafbff;
  border-radius: 30px;
  margin: 50px auto;
  border-collapse: collapse;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888888;
}
td {
  padding: 10px;
  text-align: center;
  background-color: white;
}
#Light-color {
  background-color: #e6e8f0;
}
th {
  background-color: #fafbff;
  width: 10px;
  height: 60px;
}
.Title {
  font-family: "Poppins", sans-serif;
  font-size: xxx-large;
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
.create-button button {
  background-color: #dd5928;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  color: white;
  font-family: Poppins;
  cursor: pointer;
  border: none;
}

.create-button,
.Title {
  margin-right: 200px;
}
.create-button {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}
.Logo {
  width: 10px;
  height: 12px;
  margin-top: 21px;
  margin-left: 70px;
  gap: 4px;
}
/* @media screen and (min-width: 1550px) {
  .container {
    width: 1900px;
    height: 920px;
  }
  table {
    width: 1300px;
    height: 500px;
    transform: translate(-450px, 80px);
  }
  .create-button {
    transform: translate(550px, 10px);
  }
  #Title {
    width: 450px;
    left: 250px;
    position: absolute;
    font-family: Poppins;
  }
} */
</style>
