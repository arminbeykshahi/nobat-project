<template>
   <div class="nobat mt-5">
     <div class="container">
       <div class="row">
         <div class="col-md-8 mx-auto">
           <div class="card">
             <div class="card-body">
              
               <div v-if="showalert" class="alert alert-danger w-100">
                   لطفا تمامی فیلد ها را پر کنید                 
               </div>
               
               <form @submit.prevent="validation">

                  <div class="mb-4">
                  <label for="name" class="form-label">نام : </label>
                  <input v-model="name" type="text" class="form-control" id="name" placeholder="نام">
                  </div>

                   <div class="mb-4">
                  <label for="lastname" class="form-label">نام خانوادگی : </label>
                  <input v-model="lastname" type="text" class="form-control" id="lastname" placeholder="نام خانوادگی">
                   </div>

                   <div class="mb-4">
                  <label for="date" class="form-label">تاریخ :</label>
                  <input v-model="date" type="date" class="form-control" id="date">
                   </div>

                   <p>پزشکان : </p>

                   <div class="mb-4 d-flex">

                     <div class="form-check">
                     <input v-model="doctor" value="آشوری" name="doctor" class="form-check-input" type="radio"  id="ashoori">
                     <label class="form-check-label" for="ashoori">
                دکتر آشوری                     
                     </label>
                     </div>

                      <div class="form-check ms-2">
                     <input v-model="doctor" value="طاهرزاده" name="doctor" class="form-check-input" type="radio"  id="taherzade">
                     <label class="form-check-label" for="taherzade">
                     دکتر ظاهر زاده                    
                     </label>
                     </div>

                      <div class="form-check ms-2">
                     <input v-model="doctor" value="میرعرب" name="doctor" class="form-check-input" type="radio"  id="mirarab">
                     <label class="form-check-label" for="mirarab">
                     دکتر میرعرب                    
                     </label>
                     </div>

                   </div>


                 <button type="submit" class="btn btn-success w-100">رزرو نوبت </button>

               </form>
             


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


    const showalert = ref(false)
    const name = ref('')
    const lastname = ref('')
    const doctor = ref('آشوری')
    const date = ref('')
  



    function validation() {

         
        if (name.value == '' || lastname.value == '' || doctor.value == '') {
           
           showalert.value = true
        }
    

            

            if (name.value && lastname.value && doctor.value !== '') {
                
                showalert.value = false

               axios.post('http://localhost:3000/persons', {

               name: name.value,
               lastname: lastname.value,
               doctor : doctor.value,
               date : date.value
               })
              .then(function (response) {
              console.log(response);
              
              })
            .catch(function (error) {
            console.log(error);
            });

            Swal.fire({
           position: 'center',
           icon: 'success',
          title: 'رزرو نوبت با موفقیت انجام شد',
          showConfirmButton: false,
          timer: 1500
})
          }
              
            }

            
       
      
  

    validation()


    return{showalert,validation,name,lastname,doctor,date}
  }

}
</script>

<style>

html {

   direction: rtl !important;
}


.form-check-label {

   color: black !important;
}


label {

   color: black !important;
}



</style>