<script setup lang="ts">
import WaveHand from '@/assets/Wavehand.png'
import React from '@/assets/react (1).png'
import Vue from '@/assets/vue.png'
import Angular from '@/assets/angular.png'
import EntertainBg from '@/assets/entertain-desk.jpg'
import PlanetBg from '@/assets/planet-desk.jpg'
import EcommerceBg from '@/assets/ecommerce-desk.jpg'
import RestBg from '@/assets/restdesk.jpg'
import DevjobsBg from '@/assets/devjobs-view.jpg'
import GalleriaBg from '@/assets/galleria-desk.jpg'
import MyteamBg from '@/assets/myteam-desk.jpg'
import Vuetify from '@/assets/vuetify.svg'
import Antd from '@/assets/antd.svg'
import Html from '@/assets/html.png'
import Vite from '@/assets/vite.svg'
import Tailwind from '@/assets/tailwind.svg'
import JS from '@/assets/javascript.png'
import TS from '@/assets/typescript.png'
import Github from '@/assets/github.png'
import Git from '@/assets/git.png'
import Portfolio from '@/assets/portfolio-img.png'
import Pointer from '@/assets/pointer.png'

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
    desc: '',
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
    desc: '',
    link: 'https://rest-countries-api-react-tsx.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: RestBg
  },
  {
    title: 'Ecommerce product page',
    desc: 'An ecommerce platform for a single product',
    link: 'https://ecommerce-product-page-gray-pi.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: EcommerceBg
  },
  {
    title: 'Planets fact site',
    desc: '',
    link: 'https://ecommerce-product-page-gray-pi.vercel.app',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: PlanetBg
  },
  {
    title: 'Myteam multi-page site',
    desc: 'An informational website for showcasing talents for companies, team building experience and collaborations.',
    link: '',
    stacks: [{ tailwind: Tailwind }, { js: JS }, { html: Html }, { vite: Vite }],
    image: MyteamBg
  },
  {
    title: 'Entertainment web app',
    desc: '',
    link: '',
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { vue: Vue }, { html: Html }, { vite: Vite }],
    image: EntertainBg
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
                    <img :src="Object.values(stack)" alt="stack-log" class="w-[1.5rem]" />
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
  </v-container>
</template>
