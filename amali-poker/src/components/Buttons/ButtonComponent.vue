<template>
  <div>
    <button>
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: Array,
  },
});
</script>

<style scoped>
button {
  width: 149px;
  height: 42px;
  padding: 8px 16px;
  background-color: rgba(221, 89, 40, 1);
  color: white;
  border-radius: 8px;
  border: none;
}
</style>
