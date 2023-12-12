<template>
  <main>
    <div class="main-content">
      <div class="input-box">
        <h1>Copy URL</h1>
        <input
          ref="urlInput"
          type="text"
          placeholder="https://app.planitpoker.com/room/RddrlsVjwxgj8RPJ7p0A"
        />
      </div>
      <div class="btn-main">
        <div class="save-btn">
          <button @click="copyToClipboard">Copy</button>
        </div>
        <div class="cancil-btn">
          <button @click="cancelCopy">Cancel</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const urlInput = ref(null);
const isCopyUrlModalVisible = ref(true);

// Function to copy the URL
const copyToClipboard = () => {
  const inputElement = urlInput.value;
  inputElement.select();
  document.execCommand("copy");
  alert("Url copied");
  isCopyUrlModalVisible.value = false; // This is to hide the modal after the URL has been copied
};

// function to cancel the URL
const cancelCopy = () => {
  isCopyUrlModalVisible.value = false;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-weight: 700;
  font-family: "poppins";
  background-size: cover;
  background-position: center;
}

main {
  position: fixed;
  left: 30%;
  top: 30%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
}

h1 {
  margin-bottom: 13px;
  font-size: 30px;
  color: #474d66;
}

.main-content {
  width: 600px;
  height: 255px;
  border-radius: 9px;
  padding: 40px;
  background: rgb(250, 243, 240);
}

.input-box input {
  width: 514px;
  height: 40px;
  border-radius: 3px;
  font-size: 17px;
  margin-top: 15px;
  padding-left: 18px;
  padding-right: 18px;
  border: 1px solid #d9d9d9;
}

.btn-main {
  display: flex;
  margin-top: 50px;
  margin-left: 170px;
}

button {
  border-radius: 5px;
  height: 35px;
  width: 65px;
}

.save-btn button {
  background: #c93900;
  border: none;
  margin-right: 7px;
  color: #fff;
}

.save-btn button:hover {
  background: aliceblue;
}

.save-btn {
  margin-left: 210px;
}

.cancil-btn button {
  background: rgb(255, 253, 253);
  border: none;
  color: #696f8c;
}

.cancil-btn button:hover {
  background: rgb(248, 248, 248);
}
</style>
