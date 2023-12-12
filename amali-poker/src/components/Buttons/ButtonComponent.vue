<template>
  <div>
    <button
      :style="[
        index === 1 && {
          backgroundColor: '#FFF',
          color: '#696F8C',
          border: '1px solid var(--neutral-n-400, #D8DAE5)',
          width: '95px',
          padding: '8px 16px',
          fontSize: '16px',
          outline: '0',
          lineHeight: '24px',
          fontWeight: '400px',
          boxShadow: 'none',
          fontFamily: 'work Sans',
          textAlign: 'center',
        },
      ]"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
  },
  index: {
    type: Number,
  },
});
</script>

<style scoped>
button {
  background-color: rgba(221, 89, 40, 1);
  color: white;
  border-radius: 8px;
  border: none;
  width: 80px;
  height: 6vh;

  box-shadow: 0px 4px 10px -5px rgba(221, 89, 40, 0.3);
  letter-spacing: 1px;
}
</style>
