<template>
 <nav-bar :navber="navbar" />
 <blackground>
    <p class="font-extralight   text-black text-center text-3xl ">
      อาการของ  Covid-19 
    </p>
    <div class=" h-full">
      <pic-set>
       <img   src="../../public/images/covid-desc-2.jpg" alt="covid"/>
        </pic-set>
    </div>
   
  </blackground>
</template>

<script>
import Blackground from "@/components/Blackground.vue";

export default {
  name: "Home",
  components: {
    Blackground,
  },
  data() {
    return {
      
    };
  }
};
</script>

