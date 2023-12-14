<template>
  <SessionName>
    <div class="card-container">
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
      <div class="flex-container">
        <div class="inner">1</div>
      </div>
    </div>
  </SessionName>
</template>

<script setup>
import SessionName from "../views/SessionName.vue";
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  column-gap: -90px;
  padding: 30px;
  margin-top: 40px;
  transform: translate(10%, 5%);
}
.flex-container {
  width: 111px;
  height: 145px;
  background-color: rgba(193, 196, 214, 1);
  color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  margin: 5px;
}
.inner {
  width: auto;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 100px;
  font-size: xxx-large; 
  font-weight: 700;
  margin: 12px;
}

</style>
