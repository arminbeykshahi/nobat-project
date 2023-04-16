<template>
  
<i @click="scroll" class="bi bi-arrow-up-circle"></i>

</template>

<script>
export default {

   setup() {

       function scroll() {
           
           window.scroll({
            top: 0,
            behavior: 'smooth'
            });
       }

       scroll()

       return{scroll}
   }

}
</script>

<style>

.bi-arrow-up-circle {
     
     position: fixed;
     bottom: 40px;
     right: 40px;
     cursor: pointer;
     font-size: 2.6rem;
}

</style>