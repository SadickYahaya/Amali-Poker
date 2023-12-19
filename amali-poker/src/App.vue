<template>
  <div>
    <router-view /> 
    <username-modal-vue/>
  </div>
</template>

<script setup>
import UsernameModalVue from "./components/Modals/UsernameModal.vue";

</script>

<style scoped>
main{
  background-image: url("assets/Group 633208.svg");
  width:100%;
  height:942px ;
  
}
</style>
