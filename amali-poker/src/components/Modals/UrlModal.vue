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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.main-content {
  width: 600px;
  height: 265px;
  border-radius: 20px;
  padding: 40px;
  background: rgb(255, 245, 241);
  border: none;
}

.input-box input {
  width: 514px;
  height: 40px;
  border-radius: 8px;
  border: none;
}

.btn-main {
  display: flex;
  margin-top: 40px;
  margin-left: 170px;
}

button {
  border-radius: 10px;
  height: 30px;
  width: 60px;
}

.save-btn button {
  background: rgb(255, 38, 0);
  border: none;
  margin-right: 7px;
}

.save-btn button:hover {
  background: aliceblue;
}

.save-btn {
  margin-left: 230px;
}

.cancil-btn button {
  background: rgb(255, 253, 253);
  border: none;
}

.cancil-btn button:hover {
  background: orange;
}

/* @media (max-width: 600px) {
  body {
    font-weight: 700;
    font-family: "poppins";
    background-size: cover;
    background-position: center;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  .main-content {
    width: 450px;
    height: 264px;
    border-radius: 20px;
    padding: 40px;
    background: rgb(255, 243, 239);
    border: none;
  }

  .single-input {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 3px;
  }

  .single-input h1 {
    margin-left: 80px;
  }

  .single-input input {
    width: 370px;
    height: 40px;
    border-radius: 8px;
    border: none;
    margin-right: 30px;
  }

  .btn-main {
    display: flex;
    margin-top: 40px;
    margin-left: 80px;
  }

  button {
    border-radius: 10px;
    height: 30px;
    width: 60px;
  }

  .save-btn button {
    background: rgb(255, 38, 0);
    border: none;
    margin-right: 7px;
  }

  .save-btn button:hover {
    background: aliceblue;
  }

  .save-btn {
    margin-left: 190px;
  }

  .cancil-btn button {
    background: rgb(255, 253, 253);
    border: none;
  }

  .cancil-btn button:hover {
    background: orange;
  }
}
</style> */