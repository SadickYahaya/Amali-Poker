<template>
  <SessionName>
    <div class="container">
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
.container {
  width: 683px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  transform: translate(100px, 100px);
}
.inner {
  width: 85px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 1);
  transform: translate(11.5px, 16.5px);
  text-align: center;
  line-height: 100px;
  font-size: xxx-large;
  font-weight: 700;
}
.flex-container {
  width: 111px;
  height: 145px;
  background-color: rgba(193, 196, 214, 1);
  color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>