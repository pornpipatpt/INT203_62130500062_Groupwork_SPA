<template>
    <header class="flex justify-between place-items-center ">
        <div class="flex justify-center">
        <img class="logo" src="../../public/images/covid-desc-1.jpg" width="80">
        </div>
         <p class=" pb-16 ">Covid-19 Survey</p>
        <div class="space-x-10">
        <router-link to="/" class="inline-block">Home</router-link>
        <router-link to="/about" class="inline-block">About Covid-19</router-link>
        </div>
    </header>
</template>
<style scoped>
p{
    font-size: 42px;
}
*{
    font-size: 22px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color:rgb(0, 153, 255);
    color: white;
}
header{
    padding: 8px 5%;
}
</style>