<script setup lang="ts">
import WaveHand   from '@/assets/Wavehand.png'
import React      from '@/assets/react(1).png'
import Vue        from '@/assets/vue.png'
import Angular    from '@/assets/angular.png'
import EntertainBg from '@/assets/entertaindesk.jpg'
import ProductBg  from '@/assets/ProductBg.jpg'
import PlanetBg   from '@/assets/planetdesk.jpg'
import EcommerceBg from '@/assets/ecommercedesk.jpg'
import RestBg      from '@/assets/restdesk.jpg'
import DevjobsBg from '@/assets/devjobsview.jpg'
import GalleriaBg from '@/assets/galleriadesk.jpg'
import MyteamBg from '@/assets/myteamdesk.jpg'
import GithubUserBg from '@/assets/GithubUserBg.jpg'
import Vuetify from '@/assets/vuetify.svg'
import Antd from '@/assets/antd.svg'
import Html from '@/assets/html.png'
import Vite from '@/assets/vite.svg'
import Tailwind from '@/assets/Tailwind.svg'
import JS from '@/assets/javascript.png'
import TS from '@/assets/typescript.png'
import Github from '@/assets/github.png'
import Git from '@/assets/git.png'
import Portfolio from '@/assets/portfolioimg.png'
import Pointer from '@/assets/pointer.png'

import { defineProps,ref } from 'vue'

interface Project {
  title: string
  desc: string
  link: string
  stacks: {
    [key: string]: string
  }[]
  image: string
}

const data: Project[] = [
  {
    title: 'Galleria Slideshow',
    desc: 'An art gallery with paintings from some great artist in history',
    link: 'https://galleria-slideshow-nu.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { react: React }, { html: Html }, { vite: Vite }],
    image: GalleriaBg
  },
  {
    title: 'Devjobs Web app',
    desc: 'A web based platform to visualize devjobs; sort/filter jobs on some preference, detailed page for each job and theme for both modes.',
    link: 'https://devjobs-web-app-zeta.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: DevjobsBg
  },
  {
    title: 'Rest Country API',
    desc: 'A platform displaying rest country API data for countries and other related info.',
    link: 'https://rest-countries-api-react-tsx.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: RestBg
  },
  {
    title: 'Ecommerce product page',
    desc: 'An ecommerce platform for a single product',
    link: 'https://ecommerce-product-page-gray-pi.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite },{ vue: Vue}],
    image: EcommerceBg
  },
  {
    title: 'Planets fact site',
    desc: 'A site visualizing info about planets in the solar system',
    link: 'https://planets-fact-site-83yc.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite },{react: React}],
    image: PlanetBg
  },
  {
    title: 'GitHub user search app',
    desc: 'Github User finder app is used to pull profile data and display it from GitHub users API',
    link: 'https://github.com/Sye-5pace/Github_Devfinder_App',
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { html: Html }, { vite: Vite },{react: React}],
    image: GithubUserBg
  },
  {
    title: 'Myteam multi-page site',
    desc: 'An informational website for showcasing talents for companies, team building experience and collaborations.',
    link: 'https://myteam-multipage-website-5yeus.vercel.app/',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: MyteamBg
  },
  {
    title: 'Entertainment web app',
    desc: 'A movie site visualizing categories of movies and preferences that can be made',
    link: 'https://entertainment-web-app-rosy-omega.vercel.app/',
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { vue: Vue }, { html: Html }, { vite: Vite }],
    image: EntertainBg
  },
  {
    title: 'Product feedback app',
    desc: 'A platform that user share feedbacks about products.',
    link: 'https://product-feedback-seven.vercel.app/',
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { vue: Vue }, { html: Html }, { vite: Vite }],
    image: ProductBg
  }
]
</script>

<template>
  <v-container class="flex flex-col gap-y-4 pa-0 ga-sm-10 overflow-y-auto mobile:w-full" fluid >
    <!-- <div class="flex items-center justify-between d-sm-none d-md-flex ga-sm-10">
      <v-col class="text-[#123b8a] flex flex-col gap-y-[1.5rem] pa-0 ">
        <div class="flex items-center gap-2 text-[2.5rem] font-semibold">
          <h2>Hi there! I am</h2> <span class="text-">Silas Owu</span>
          <img :src="WaveHand" alt="wave" class="w-[3.375rem] h-[3.375rem]" />
        </div>
        <div>
          <p class="font-medium text-[1.5rem]">Frontend Developer</p>
          <div class="flex gap-1">
            <!-- <img :src="Figma" alt="figma-logo" class="w-[1.7rem]"/>  
            <img :src="Vue" alt="vue-logo" class="w-[1.5rem]" />
            <img :src="React" alt="react-logo" class="w-[1.5rem]" />
            <img :src="Angular" alt="ang-logo" class="w-[1.5rem]" />
            <img :src="Vuetify" alt="vuetify-logo" class="w-[1.5rem]" />
            <img :src="Antd" alt="antd-logo" class="w-[1.5rem]" />
            <img :src="Tailwind" alt="tailwind-logo" class="w-[1.5rem]" />
            <img :src="Git" alt="git-logo" class="w-[1.5rem]" />
            <img :src="Github" alt="github-logo" class="w-[1.5rem]" />
          </div>
        </div>
      </v-col>
      <img :src="Portfolio" alt="portfolio-image" class="w-[26.8125rem] " />
    </div> -->
    
    <!-- md & sm screens -->
    <div class="flex items-center justify-between d-md  d-sm-flex flex-sm-column ga-sm-10  mobile:flex-col mobile:gap-y-8">
      <v-col class=" flex flex-col gap-y-[0.6125rem] pa-0 ">
        <div class=" flex items-center gap-2 text-[2.5rem] mobile:text-[1.5rem] font-semibold ">
          <h2 class="text-[#123b8a]">Hi there! I am</h2> 
          <span class="text-[#905c5a]">
             Silas Owu
            </span>
            <img :src="WaveHand" alt="wave" class="w-[3.375rem] h-[3.375rem] mobile:w-[2rem] mobile:h-[2rem]" />
        </div>
        <div>
          <p class="font-medium text-[1.5rem] text-[#123b8a]">Frontend Developer</p>
          <div class="flex gap-1">
            <!-- <img :src="Figma" alt="figma-logo" class="w-[1.7rem]"/>  -->
            <img :src="Vue" alt="vue-logo" class="w-[1.5rem]" />
            <img :src="React" alt="react-logo" class="w-[1.5rem]" />
            <img :src="Angular" alt="ang-logo" class="w-[1.5rem]" />
            <img :src="Vuetify" alt="vuetify-logo" class="w-[1.5rem]" />
            <img :src="Antd" alt="antd-logo" class="w-[1.5rem]" />
            <img :src="Tailwind" alt="tailwind-logo" class="w-[1.5rem]" />
            <img :src="Git" alt="git-logo" class="w-[1.5rem]" />
            <img :src="Github" alt="github-logo" class="w-[1.5rem]" />
          </div>
        </div>
      </v-col>
      <img :src="Portfolio" alt="portfolio-image" class="w-[26.8125rem] relative left-[17rem] tablet:static mobile:static mobile:w-[17rem]" />
    </div>
    
    <div class="flex flex-col gap-[8rem]" >
      <div class="flex gap-1 text-[1.5rem] text-sm-h5 ga-sm-2 d-md">
        <h4>Find me on
        <a
          class="text-[#123b8a] underline"
          href="https://www.linkedin.com/in/silas-owu-2475301b0/"
          target="_"
        >
          LinkedIn
        </a>
        and check out my works below <span><img :src="Pointer" alt="pointer"/></span>
      </h4>
      </div>
      <div>
        <h3 class="text-h5">Featured work and stacks:</h3>
        <v-carousel cycle show-arrows="hover" height="600" >
          <v-carousel-item v-for="(item, index) in data" :key="index">
            <v-sheet
              height="100%"
              color="#a0b4dc"
              class=""
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply'
              }"
            >
              <div
                class="pa-10 text-[#fff] h-full bg-[#1a1a1a] backdrop-blur-[0.125rem] bg-opacity-5 flex flex-col"
              >
                <div class="flex flex-col gap-y-2">
                  <h1 class="text-[2rem] text-[#fff] font-bold">{{ item.title }}</h1>
                  <p class="text-[1.1rem] w-[28.5rem] leading-relaxed">
                    {{ item.desc ? item.desc : 'none yet' }}
                  </p>
                  <span class="flex gap-2">
                    <span v-for="(stack, stackIndex) in item.stacks" :key="stackIndex">
                      <img :src="Object.values(stack).join(',')" alt="stack-log" class="w-[1.5rem]" />
                    </span>
                  </span>
                </div>
                <a class="text-[1.25rem] underline absolute top-[28rem]" :href="item.link" target="_"
                  >site</a
                >
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </v-container>
</template>
