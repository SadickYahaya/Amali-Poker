<template>
  <div
    class="layout"
    :style="{
      backgroundImage: `url(${Image})`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import Image from "../assets/landingPageBg.png";
</script>

<style scoped>
.layout {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
</style>
