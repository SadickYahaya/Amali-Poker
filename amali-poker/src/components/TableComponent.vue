<template>
  <LayOut>
    <div class="Logo"></div>
    <div>
      <p>Recent Sessions</p>
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
  </LayOut>
</template>

<script setup>
import LayOut from "../LayOut/LayOut.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");

table {
  width: 1180px;
  left: 700px;
  margin-top: 50px;
  background-color: #fafbff;
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, 10%);
  border-collapse: collapse;
  cursor: pointer;
}

td {
  padding: 10px;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  height: 40px;
  top: 40px;
}

#Light-color {
  background-color: #e6e8f0;
}

th {
  background-color: #fafbff;
  width: 10px;
  height: 60px;
}
p {
  display: flex;
  transform: translate(62%, -10%);
  font-size: 50px;
}

.create-button button {
  background-color: #dd5928;
  border-radius: 10px;
  width: 130px;
  height: 30px;
  color: white;
  transform: translate(878%, 30%);
  font-family: Poppins;
  cursor: pointer;
}

.Create {
  font-size: large;
  color: black;
}

.Logo {
  margin-left: 50px;
}
</style>
