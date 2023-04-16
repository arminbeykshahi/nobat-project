<template>
    
    <div :class="{ darkmode: showdarkmode }">

   <div class="header d-flex justify-content-between align-items-center">
     
     
           <i class="bi bi-list ms-5" @click="showsidebar"></i>
          
          <div class="routes">
           <ul class="d-flex">
               <li><router-link to="/">صفحه اصلی</router-link></li>
               <li class="ms-3"><router-link to="/nobat">نوبت دهی</router-link></li>
               <li class="ms-3"><router-link to="/shownobat">مشاهده نوبت</router-link></li>
             
           </ul>
           </div>
     
      
      <div class="dark me-5" @click="showdark" >
        <i class="bi bi-brightness-high fs-5" v-if="showsun"  ></i>
        <i class="bi bi-moon fs-5" v-if="showmoon"></i>
      </div>
  </div>


 <div class="sidebar scale-up-hor-right " v-if="sidebar">
        <i class="bi bi-x fs-1" @click="closesidebar"></i>
         
        <ul class="mt-5">
         <li><router-link to="/">صفحه اصلی</router-link></li>
          <br>
          <hr>
          <li><router-link to="/nobat">نوبت دهی</router-link></li>
          <br>
          <hr>
          <li><router-link to="/shownobat">مشاهده نوبت</router-link></li>
        </ul>
  </div>
  


  <router-view></router-view>

   <br>
   <br>
   <br>
   <br>
   <br>
   <br>
   
   

 <FooterItem />
 <ScrollItem />

  </div>

</template>

<script>
import { ref } from 'vue'
import FooterItem from './components/FooterItem.vue'
import ScrollItem from './components/ScrollItem.vue'

export default {
 
  components : {
      
      FooterItem,
      ScrollItem

  },
  
  setup() {
    

    const sidebar = ref(false)
    const showdarkmode = ref(true)
    const showsun = ref(false)
    const showmoon = ref(true)
    



    function showsidebar() {
      
       sidebar.value = true
    }

    showsidebar()

    function closesidebar() {
       
        sidebar.value = false
    }

    closesidebar()

   

    function showdark() {
        
         showdarkmode.value = !showdarkmode.value
         showsun.value = !showsun.value
         showmoon.value = !showmoon.value
        
      
    
    }

    showdark()

     

    return {sidebar,showsidebar,closesidebar,showdarkmode,showdark,showsun,showmoon}
  }



}
</script>

<style>

html {

  direction: rtl !important;
 
}


 .header {

      width: 100%;
      height: 4.5rem;
      background-color: hsl(207, 26%, 17%);
      color:  white !important;
      
  }

  
  
  a {

     text-decoration: none !important;
      color: white !important;

  }

  ul {

      list-style-type: none;
     
      
  }

  .router-link-active {

       border: 1.7px solid black;
       border-radius: 15px;
       padding: 6px;
      border-color: white !important;

  }

    .bi-list {

       font-size: 2rem;
       display: none;
       cursor: pointer;
       
       

    }


    .sidebar {

       position: fixed;
       top: 0;
       right: 0;
      background-color: hsl(207, 26%, 17%);
       height: 100%;
       width: 30%;
       z-index: 1;
    }

    .bi-x {

      color: red;
      cursor: pointer;
    }


    .darkmode {

       height: 100%;
       width: 100%;
       color: white;
       background-color: hsl(207, 26%, 17%);
    }

    .dark {

      cursor: pointer;
    }

    hr {

      color: white;
    }

    .scale-up-hor-right {
	-webkit-animation: scale-up-hor-right 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
   animation: scale-up-hor-right 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}



@-webkit-keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
            transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
}
@keyframes scale-up-hor-right {
  0% {
    -webkit-transform: scaleX(0.4);
            transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
}



    @media screen and (max-width: 768px) {
       

        .routes {

          display: none;
        }

        .bi-list {

           display: block;
           color: white !important;
         }


         

    }

</style>
