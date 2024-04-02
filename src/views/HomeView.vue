<script setup lang="ts">
import WaveHand   from '@/assets/Wavehand.png'
import React      from '@/assets/react(1).png'
import Vue        from '@/assets/vue.png'
import Angular    from '@/assets/angular.png'
import EntertainBg from '@/assets/entertaindesk.jpg'
import ProductBg  from '@/assets/ProductBg.jpg'
import PlanetBg   from '@/assets/planetdesk.jpg'
import EcommerceBg from '@/assets/ecommercedesk.jpg'
import TodoBg from '@/assets/todoappdesk.jpg'
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
import Pwa from '@/assets/pwa.png'
import PwaLogo from '@/assets/pwa-sticker.png'
import Pointer from '@/assets/pointer.png'



interface Project {
  title: string
  desc: string
  link: string
  stacks: { [key: string]: string }[]
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
    stacks: [{ tailwind: Tailwind }, {react: React}, { ts: TS }, { html: Html }, { vite: Vite }],
    image: RestBg
  },
  {
    title: 'Ecommerce product page',
    desc: 'An ecommerce platform for a single product',
    link: 'https://ecommerce-product-page-gray-pi.vercel.app',
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { html: Html }, { vite: Vite },{ vue: Vue}],
    image: EcommerceBg
  },
  {
    title: 'Todo App',
    desc: 'A classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra taste',
    link: 'https://todo-app-kappa-three-35.vercel.app',
    stacks: [{ tailwind: Tailwind }, {ang: Angular }, { html: Html },{pwa: Pwa}],
    image: TodoBg
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
    link: 'https://github-devfinder-app-1sa2-fmg7mainj-sye-5pace.vercel.app',
    // link: 'https://github.com/Sye-5pace/Github_Devfinder_App',
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
    stacks: [{ tailwind: Tailwind }, { ts: TS }, { vue: Vue }, { vuetify: Vuetify }, { html: Html }, { vite: Vite }],
    image: ProductBg
  }
]
</script>

<template>
  <v-container class="flex flex-col gap-y-2 pa-0 ga-sm-10 overflow-y-auto mobile:w-full mobile:gap-y-6" fluid >
    <section class="flex items-center justify-between d-md  d-sm-flex flex-sm-column ga-sm-10  mobile:flex-col mobile:gap-y-10">
      <v-col class=" flex flex-col gap-y-[0.6325rem] pa-0 mobile:gap-y-[0.75rem]">
        <div class=" flex items-center mobile:text-[1.5rem] font-semibold ">
          <img :src="WaveHand" alt="wave" class="w-[2rem] h-[2rem]" />
          <h2 class="text-[2rem] font-playfair">Hi!</h2>           
        </div>
        <div class="text-[2.5rem] mobile:text-[2rem] mobile:flex mobile:flex-col mobile:gap-y-2">
          <h1 class="font-black font-playfair"> I'm  Silas Owu</h1>
          <h3 class="font-playfair text-[#123b8a] font-black">Frontend Developer</h3>
          <p class=" font-regular w-[30rem] text-[1rem] mobile:w-full">
            Excited to show you what what I've been working on! 
            I'm on a self-paced journey to become a skilled software engineer,
            focusing on front-end development.Here, you'll see some of the projects 
            I've built while learning and honing my skills. Explore
            my projects built with the stacks below!<br>  I'd love to hear your feedback.

          </p>

          <div class="flex gap-1 p-2 border border-[#E9F0FF] justify-between w-[20rem] rounded-[0.6375rem]">
            <div class="w-2 h-2 rounded-full absolute top-[29.625rem] animate-ping left-[24.5rem] mobile:left-[18.5rem] mobile:top-[32.75rem] z-index bg-[#E9F0FF] opacity-75"></div>
            <div class="w-2 h-2 rounded-full absolute top-[29.625rem] left-[24.5rem] mobile:left-[18.5rem] mobile:top-[32.75rem] z-index bg-[#E9F0FF]"></div>
            <img :src="TS" alt="typescript-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce"/> 
            <img :src="Vue" alt="vue-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-spin " />
            <img :src="React" alt="react-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce" />
            <img :src="Angular" alt="ang-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-spin" />
            <img :src="Vuetify" alt="vuetify-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-spin" />
            <img :src="PwaLogo" alt="pwa-logo" class="w-[1.85rem] h-[1.25rem] hover:animate-spin" />
            <!-- <img :src="Antd" alt="antd-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce" /> -->
            <img :src="Tailwind" alt="tailwind-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce" />
            <img :src="Git" alt="git-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce" />
            <img :src="Github" alt="github-logo" class="w-[1.25rem] h-[1.25rem] hover:animate-bounce" />
          </div>
        </div>
      </v-col>
      <img :src="Portfolio" alt="portfolio-image" class="w-[27.8125rem] mobile:w-[20rem] relative -top-[7rem] left-[13.5rem] tablet:static mobile:static " />
    </section>
    <section class="w-full h-[7rem] bg-gradient-to-r from-[#0A234F] to-[#E9F0FF]  flex items-center justify-center gap-[8rem] mobile:gap-6 rounded-tr-4 rounded-br-4">
      <div class="text-white flex flex-col items-center justify-center ">
        <h3>0.8</h3>
        <p class="text-[0.635rem] font-thin">Years of Experience</p>
      </div>
      <div class="text-white flex flex-col items-center justify-center ">
        <h3>Not yet</h3>
        <p class="text-[0.635rem] font-thin">Happy Clients</p>
      </div>
      <div class="text-white flex flex-col items-center justify-center ">
        <h3>10+</h3>
        <p class="text-[0.635rem] font-thin">Projects done</p>
      </div>
    </section>
    <section class="flex flex-col gap-[8rem]" >
      <div class="flex gap-1 text-[1.5rem] mobile:text-[1.125rem] text-sm-h5 ga-sm-2 d-md">
        <h4>
          Find me on
          <a
            class="text-[#123b8a] underline"
            href="https://www.linkedin.com/in/silas-owu-2475301b0/"
            target="_"
          >
            LinkedIn
          </a>
          and check out my works below 
      </h4>
        <!-- <span><img :src="Pointer" alt="pointer"/></span> -->
      </div>
      <div class="flex flex-col gap-y-2">
        <h3 class="text-h5 mobile:text-[1.125rem] text-[#123b8a] border-b-2 pb-2 border-[#123b8a] w-[28rem] mobile:w-full">Some prominent projects I built for myself</h3>
        <v-carousel cycle show-arrows="hover" height="600" >
          <v-carousel-item v-for="(item, index) in data" :key="index" class="overflow-x-hidden">
            <v-sheet
              height="100%"
              color="#a0b4dc"
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
                  <p class="text-[1.1rem] w-[28.5rem] leading-relaxed mobile:w-[18rem]">
                    {{ item.desc ? item.desc : 'none yet' }}
                  </p>
                  <span class="flex gap-2">
                    <span v-for="(stack, stackIndex) in item.stacks" :key="stackIndex">
                      <img :src="Object.values(stack).join(',')" alt="stack-log" class="w-[1.25rem]" />
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
    </section>
  </v-container>
</template>
