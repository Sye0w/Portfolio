<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue
  import WaveHand from '../assets/Wavehand.png'
  import React from '../assets/react (1).png'
  import Vue from '../assets/vue.png'
  import Angular from '../assets/angular.png'
  import Vuetify from '../assets/vuetify.svg'
  import Antd from '../assets/antd.svg'
  import Tailwind from '../assets/tailwind.svg'
  import JS from '../assets/javascript.png'
  import TS from '../assets/typescript.png'
  import Github from '../assets/github.png'
  import Git from '../assets/git.png'
  import Portfolio from '../assets/portfolio-img.png'
  import Pointer from '../assets/pointer.png'
  // import data from '../assets/data'

  const stacks = [
    { angular: Angular },
    { react: React },
    { vue: Vue },
    { JS: JS },
    { TS: TS },
    { Tailwindcss: Tailwind }
  ]

  interface Project {
    title: string;
    desc: string;
    link: string;
    stacks: {
      [key: string]: string
    }[];
    image: string;
  }

  const data: Project[]  = [
    {
      "title": "Galleria Slideshow",
      "desc": "",
      "link": "https://galleria-slideshow-nu.vercel.app",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/galleria-desk.JPG"
    },
    {
      "title": "Devjobs Web app",
      "desc": "A web based platform to visualize devjobs; sort/filter jobs on some preference, detailed page for each job and theme for both modes.",
      "link": "https://devjobs-web-app-zeta.vercel.app",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/devjobs-view.JPG"
    },
    {
      "title": "Rest Country API",
      "desc": "",
      "link": "https://rest-countries-api-react-tsx.vercel.app",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/rest-desk.jpg"
    },
    {
      "title": "Ecommerce product page",
      "desc": "An ecommerce platform for a single product",
      "link": "https://ecommerce-product-page-gray-pi.vercel.app",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/ecommerce-desk.jpg"
    },
    {
      "title": "Planets fact site",
      "desc": "",
      "link": "https://ecommerce-product-page-gray-pi.vercel.app",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/planet-desk.jpg"
    },
    {
      "title": "Myteam multi-page site",
      "desc": "An informational website for showcasing talents for companies, team building experience and collaborations.",
      "link": "",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "js": "./javascript.png" },
        { "html": "" },
        { "vite": "" }
      ],
      "image": "../assets/"
    },
    {
      "title": "Entertainment web app",
      "desc": "",
      "link": "",
      "stacks": [
        { "tailwind": "./Tailwind.svg" },
        { "ts": "./typescript.svg" },
        { "vue": "./vue.png" },
        { "html": "./" },
        { "vite": "" }
      ],
      "image": "../assets/entertain-desk.jpg"
    }
  ]
</script>

<template>
  <v-container class="flex flex-col gap-y-4 pa-0" fluid>
    <div class="flex items-center justify-between">
      <v-col class="text-[#123b8a] flex flex-col gap-y-[1.5rem] pa-0">
        <h3 class="flex items-center gap-2 text-[2.5rem] font-semibold">
          Hi there! I am Silas Owu
          <img :src="WaveHand" alt="wave" class="w-[3.375rem] h-[3.375rem]" />
        </h3>
        <div>
          <p class="font-medium text-[1.5rem]">Front-end Developer</p>
          <div class="flex gap-1">
            <!-- <img :src="Figma" alt="figma-logo" class="w-[1.7rem]"/>  -->
            <img :src="Vue" alt="vue-logo" class="w-[1.5rem]" />
            <img :src="React" alt="react-logo" class="w-[1.5rem]" />
            <img :src="Angular" alt="ang-logo" class="w-[1.5rem]" />
            <img :src="Vuetify" alt="vuetify-logo" class="w-[1.5rem]" />
            <img :src="Antd" alt="antd-logo" class="w-[1.5rem]" />
            <br />
            <img :src="Tailwind" alt="tailwind-logo" class="w-[1.5rem]" />
            <img :src="Git" alt="git-logo" class="w-[1.5rem]" />
            <img :src="Github" alt="github-logo" class="w-[1.5rem]" />
          </div>
        </div>
      </v-col>
      <img :src="Portfolio" alt="portfolio-image" class="w-[26.8125rem]" />
    </div>
    <div class="flex flex-col gap-[8rem]">
      <span class="flex gap-1 text-[1.5rem]"
        >Find me on
        <a
          class="text-[#123b8a] underline"
          href="https://www.linkedin.com/in/silas-owu-2475301b0/"
          target="_"
        >
          LinkedIn
        </a>
        and check out my works below <img :src="Pointer" alt="pointer"
      /></span>
      <v-carousel cycle show-arrows="hover" height="550">
        <v-carousel-item v-for="(item, index) in data" :key="index">
          <v-sheet height="100%" color="#a0b4dc" >
            <div class="border-2 flex pa-10 h-full">
              <div class="text-[#fff]">
                <h1 class="text-[2rem] text-[#fff] font-bold">{{ item.title }}</h1>
                {{ console.log(item.image)}}
                <p class="text-[1.3rem]">{{ item.desc ? item.desc : 'none yet' }}</p>
                <a class="text-[1.25rem]" :href="item.link" target="_">link</a>
              </div>
              <img   :src="item.image"/>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>
