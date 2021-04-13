<template>
 <div v-bind:style="{ background: activeColor}">
  <div id="button" class="circle-container">
   <ul class="" v-for="(item, index) in menuData.content[0].startMenu">
     <li>
     <CommunicationButton v-bind:id="`button${index}`" v-bind:key="item.name"
                         :displayed_text="item.displayed_text"
                         :icon_link="item.icon_link" @left="left" @right="right" v-focus
                         @click.native="showTextAndSpeak(index)" class="hvr-grow"></CommunicationButton>
    </li>
</ul>
</div>
</div>
</template>

data() {
return {
 activeColor: 'lightgreen',