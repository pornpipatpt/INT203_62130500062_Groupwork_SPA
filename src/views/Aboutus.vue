<template>
  <nav-bar :navber="navbar" />
  <blackground>
    <p class="font-extralight   text-black text-center text-3xl ">
        About Me 
     </p>
       <div class="flex flex-wrap justify-center">
       <img  class=" w-6/12 sm:w-4/12 px-4 " src="../../public/images/covid-desc-6.jpg" alt="covid" />
       <div class="about-text">
					<p>62130500062 นายพรพิพัฒน์ ทำพันธ์</p> 
					<p>สวัสดีครับ ผมเป็นนักศึกษาคณะเทคโนโลยีสารสนเทศชั้นปีที่ 3 ของมหาวิทยาลัยพระจอมเกล้าธนบุรี </p>
			</div>
       </div>
       <h1 class="font-extralight   text-black text-center text-3xl ">Contact Me</h1>
       สามารถติกต่อ-พูดคุยกับผมได้ตามContactของผมดังนี้
      <p class="p"> <a href="https://github.com/pornpipatpt"> My Git Hub </a></p>
       <p class="p"> <a href="https://www.facebook.com/pornpipat.thumpan.3/"> My FaceBook </a></p>
       <p>Email: pornpipatpt@mail.kmutt.ac.thy</p>
  </blackground>

</template>

<script>
import Blackground from "@/components/Blackground.vue";
// import Contentbox from "@/components/Contentbox.vue";
export default {
  name: "Home",
  components: {
    Blackground,
    // Contentbox,
  },
  data() {
    return {};
  },
};
</script>
