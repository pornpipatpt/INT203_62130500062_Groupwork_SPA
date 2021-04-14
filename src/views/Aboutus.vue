<template>
  <nav-bar :navber="navbar" />
  <blackground>
    <p class="font-extralight   text-black text-center text-3xl ">
        
     </p>
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
