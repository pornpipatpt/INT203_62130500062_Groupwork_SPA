<template>
    <header class="flex justify-between place-items-center">
        <div>
        <img class="logo" src="../../public/images/covid-desc-1" width="400">
        </div>
        <div class="space-x-10">
        <router-link to="/" class="inline-block">Home</router-link>
        <router-link to="/about" class="inline-block">AboutUs</router-link>
        </div>
    </header>
</template>
<style scoped>
*{
    font-size: 22px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color:#00c33e;
    color: white;
}
header{
    padding: 10px 5%;
}
</style>