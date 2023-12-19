

<template>

  <main>

 
  <div class="main-container">  
      <p>Enter Username </p>
    
<div class="sub-container">
<div class="input-box">
  <input type="text" placeholder="Enter username">
</div>
<div class="btn">
  <button>Join Session</button>

</div>
</div>
</div>
</main>   
  </template>

<script>


</script>

<style>


.main-container{
  width: 623px;
  height: 212px;
  background-color:#FDF5F2 ;
  border-radius: 8px;
  box-shadow: 16px 16px 32px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  top:327px;
  left:600px;
  z-index: 999;

 
}
.sub-container{
  background-color:#FDF5F2 ;
  width: 575px;
  height: 119px;
  margin:  auto;

}
p{
  
color:#474D66;
font-size: 24px;
font-weight:700;
line-height: 29.05px;
text-align: center;
padding: 16px 0px;
}
.input-box{
  width: 575px;
  padding:10px 0px;
  

}
input{
  background-color:#FDF5F2 ;
  width: 527px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  padding: 0px 15px;
}
.btn{
  padding: 3px 0px;
  width: 575px;
  line-height: 29.05px;
  text-align: center;
}
button{
  border: none;
background-color: #E47A53;
border-radius: 8px;
width: 189px;
height: 29px;
padding: 2px 0px;
color: white;

}

</style>