<script setup  lang="ts">
// import TheWelcome from '../components/TheWelcome.vue
  import WaveHand from '../assets/Wavehand.png'
  import React from '../assets/react (1).png'
  import Vue from '../assets/vue.png'
  import Figma from '../assets/figma.png'
  import Angular from '../assets/angular.png'
  import Vuetify from '../assets/vuetify.svg'
  import Antd from '../assets/antd.svg'
  import Git from '../assets/git.png'
  import Github from '../assets/github.png'
  import Tailwind from '../assets/tailwind.svg'
  import Portfolio from '../assets/portfolio-img.png'
   // import 

</script>

<template>
  <v-container class="pa-0 flex flex-col gap-y-4" fluid>
    <v-row class="border flex flex-col ">
      <v-row class="flex items-center">
        <v-col class="text-[#123b8a] flex flex-col gap-y-[1.5rem]">
          <h3 class="flex items-center gap-2 text-[2.5rem] font-semibold">
            Hi there! I am Silas Owu
            <img :src="WaveHand" alt="wave" class="w-[3.375rem] h-[3.375rem]"/>
          </h3>
          <div>
            <p class="font-regular text-[1.5rem]">Front-end Developer</p>
            <div class="flex gap-1">
              <!-- <img :src="Figma" alt="figma-logo" class="w-[1.7rem]"/>  -->
              <img :src="Vue" alt="vue-logo" class="w-[1.5rem]"/> 
              <img :src="React" alt="react-logo" class="w-[1.5rem]"/> 
              <img :src="Angular" alt="ang-logo" class="w-[1.5rem]"/> 
              <img :src="Vuetify" alt="vuetify-logo" class="w-[1.5rem]"/> 
              <img :src="Antd" alt="antd-logo" class="w-[1.5rem]"/> 
              <br/>
              <img :src="Tailwind" alt="tailwind-logo" class="w-[1.5rem]"/> 
              <img :src="Git" alt="git-logo" class="w-[1.5rem]"/> 
              <img :src="Github" alt="github-logo" class="w-[1.5rem]"/> 
            </div>
          </div>
        </v-col>
        <v-col>
          <img :src="Portfolio" alt="portfolio-image"/>
        </v-col>
      </v-row>
      <!-- <v-row class="">Find me on LinkedIn and check out my works below</v-row> -->
    </v-row>
    <v-row>Works</v-row>
  </v-container>
</template>
