<template>
   
  <div class="intro scale-up-center  mt-5">
      <div class="container">
          <div class="row g-3">
              <div class="col-md-6">
                  <br>
                  <br>
                  <br>
                  <br>
                  <p class="mt-4 mb-4">
              کلینیک پزشکی خورشید با پزشکان مجرب در زمینه های چشم پزشکی و 
              پوست و مو و پزشک اطفال همواره خدمت رسان هموطنان عزیز می باشد
                  </p>
              </div>
              <div class="col-md-6">
                  <img src="../assets/Doctor_Monochromatic.png" width="450px" height="450px" alt="">
              </div>
          </div>
      </div>
  </div>
  
  <br>
  <br>

  <div class="doctors mt-5">
      <div class="container">
          <h5>پزشکان :</h5>
          <div class="row g-4 mt-5">
              <div class="col-md-4">
                  <div class="card mx-auto h-100" style="width: 18rem;">
                  <img src="../assets/doctor1.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">دکتر آشوری</h5>
                  <p>
                      دکتر آشوری متخصص پوست و مو و دارای بورد تخصصی و مدرک تخصص 
                      پوست و مو از دانشگاه علوم پزشکی تهران
                  </p>
           
    
            </div>
          </div>
              </div>
              <div class="col-md-4">
                  <div class="card mx-auto h-100" style="width: 18rem;">
            <img src="../assets/doctor3.jpg" class="card-img-top" alt="...">
           <div class="card-body">
            <h5 class="card-title">دکتر طاهرزاده</h5>
            <p>
                دکتر طاهرزاده متخصص چشم پزشکی از دانشگاه مک مستر کانادا و جراح عیوب انکساری
            </p>
        </div>
      </div>
              </div>
              <div class="col-md-4">
                  <div class="card mx-auto h-100" style="width: 18rem;">
            <img src="../assets/doctor1.jpg" class="card-img-top" alt="...">
           <div class="card-body">
          <h5 class="card-title">دکتر میرعرب</h5>
            <p>
                دکتر میرعرب متخصص اطفال و کودکان از دانشگاه شهیدبهشتی با بورد تخصصی
            </p>
        </div>
      </div>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>



.card {

     border-radius: 10px;
}

.card p {

     color: black !important;
}


.scale-up-center {
	-webkit-animation: scale-up-center 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: scale-up-center 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}


@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}



</style>