<template>
<br>
<br>
   <div class="show-item mt-5">
     <div class="container">
       <div class="row">
 
          <form @submit.prevent="search" class="d-flex"> 
             
             <input v-model="meghdarfield" type="text" class="form-control w-50 mx-auto jostejoo" placeholder="نام پزشک را وارد کنید ...">
             
             <button type="submit" class="btn btn-success ersal">جستجو</button>
            
           </form> 
           
          
       </div>
       <br>
       <br>
       <br>
       <div class="row g-5 mt-5">
         <div v-for="result in results" :key="result.id"  class="col-md-4">
           <div class="card">
             <div class="card-body">
                  <span> نام :<span class="ms-3">{{result.name}}</span></span>
                  <br>
                  <br>
                  <span>نام خانوادگی :<span class="ms-3">{{result.lastname}}</span></span>
                  <br>
                  <br>
                   <span>تاریخ :<span class="ms-3">{{result.date}}</span></span>
                  <br>
                  <br>
                  <span>پزشک :<span class="ms-3">{{result.doctor}}</span></span>
                  <br>
                  <br>
                  <button @click="laghv(result.id)" class="btn btn-danger w-100">لغو نوبت </button>
                  
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {


  setup() {

    const meghdarfield = ref('')
    const results = ref([])

    
    function search() {
      
      axios.get(`http://localhost:3000/persons?doctor=${meghdarfield.value}`)
     .then(function (response) {
 
         results.value = response.data
      })
      .catch(function (error) {
    
       console.log(error);
  })
    }

    search()


    function laghv(id) {
        
       results.value = results.value.filter(result => result.id != id)
        
        axios.delete(`http://localhost:3000/persons/${id}`)
       .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
    
    console.log(error);
  })

   Swal.fire({
          position: 'center',
          icon: 'success',
          title:'نوبت لغو شد',
          showConfirmButton: false,
          timer: 1500
      })
    }
    
    
  

    return{meghdarfield,search,results,laghv}
  }

}
</script>

<style scoped>

html {

   direction: rtl !important;
}


.jostejoo {
   
   border-radius: 20px;
   position: relative;
  
}


.ersal {

  display: none;
  
}

span {

  color: black !important;
}

</style>