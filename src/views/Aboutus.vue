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
					<p>สวัสดีครับ ผมเป็นนักศึกษาคณะเทคโนโลยีสารสนเทศชั้นปีที่ 2 ของมหาวิทยาลัยพระจอมเกล้าธนบุรี </p>
          <p>ผมกำลังศึกษาเกี่ยวกับเรื่อง Vue และนี่คือสิ่งที่ผมได้เรียนจากอาจารย์และศึกษาเองเพิ่มเติมและนำสิ่งที่อาจารย์ได้เริ่มไว้ให้มาต่อยอด </p>
          <p>ผมพร้อมที่จะพัฒนาและเรียนรู้ในสิ่งใหม่ๆ</p>
			</div>
       </div>
       <h1 class="font-extralight   text-black text-center text-3xl ">Contact Me</h1>
       สามารถติดต่อ-พูดคุยกับผมได้ตามContactของผมดังนี้ 
     <p class="p">  My GitHub:<a class="text-fuchsia-600" href="https://github.com/pornpipatpt">pornpipatpt </a></p>
       <p class="p"> My FaceBook:<a class ="text-fuchsia-600" href="https://www.facebook.com/pornpipat.thumpan.3/"> SP Boat'z Pprnpipat </a></p>
       <p class=""> Email: <p1 class="text-fuchsia-600">pornpipatpt@mail.kmutt.ac.th</p1> </p>
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
    return {};
  },
};
</script>
