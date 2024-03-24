<script setup lang="ts">
  import LinkedIn from './assets/linkedin.png'
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'
  import Portfolio from '@/assets/portfolioimg.png'


  const isClicked = ref<string>(localStorage.getItem('Home') ||'Home')
  const clickEfx = (option: string) => {
    isClicked.value = option
    localStorage.setItem('Home',isClicked.value)
  }
</script>

<template>
  <v-app class="p-0 m-0 border-box w-full min-h-screen font-chivo overflow-y-auto" >
    <v-app-bar
      scroll-behavior="elevate"
      scroll-threshold="2"
      class="border-b d-flex border-[#123b8a] "
    >
      <div class="flex items-center w-full  justify-between mx-[7.8rem] mobile:mx-4">
        <div class="flex items-center gap-[3.25rem] children:font-medium uppercase ">
          <div class="text-[#123B8A] d-flex" @click="clickEfx('Home')">
            <v-icon color="#123b8a" icon="mdi-home-outline" size="small" class="animate-wiggle"></v-icon>
            <router-link
              to="/"
              class="text-[1.125rem] mobile:text-[1rem]"
              :class="isClicked === 'Home' ? 'text-[#123b8a]' : 'text-[#000]'"
            >
              Home
            </router-link>
          </div>
          <div class="text-[#272727] hover:text-[#123B8A]" @click="clickEfx('About')">
            <router-link
              class="text-[1.125rem] mobile:text-[1rem]"
              :class="isClicked === 'About' ? 'text-[#123b8a]' : ''"
              to="/about"
            >
              About
            </router-link>
          </div>
          <div class="text-[#272727] hover:text-[#123B8A]" @click="clickEfx('Resume')">
            <router-link
              class="text-[1.125rem] mobile:text-[1rem]"
              :class="isClicked === 'Resume' ? 'text-[#123b8a]' : ''"
              to="/resume"
              >Resume</router-link
            >
          </div>
        </div>
        <img :src="Portfolio" alt="portfolio-image" class="w-[2.5rem] " />
      </div>
    </v-app-bar>
    <v-main class="mx-[6.8rem]  mt-[3.5rem] mb-[6.25rem] mobile:mx-4"  >
      <v-fade-transition> 
        <RouterView />
      </v-fade-transition>
    </v-main>
    <footer class="bg-[#CFD8EA] w-full h-[21rem] px-[6.8rem]  py-[2.5rem] flex items-center  mobile:px-4 " v-once>
      <div class="flex  gap-10 w-full justify-between mobile:flex-col">
        <div class="flex flex-col gap-y-[2.5rem] mobile:gap-y-[1rem] text-[2rem] text-sm-h5 mobile:text-[1.25rem]">
          <h3 class="text-[#123b8a] font-bold ">Let's chat!</h3>
          <a href="mailto:owusilasyp00@gmail.com" class="text-[#272727] cursor-pointer">owusilasyp00@gmail.com</a>
        </div>
        <div class="items-end flex mobile:flex-col">
          <div class="items-center text-[1.75rem] mobile:text-[1rem]  mobile:flex-col text-sm-h5  flex gap-[1.75rem] flex-sm-column  ">
            <p>You can follow me on</p>
            <a  href="https://www.linkedin.com/in/silas-owu-2475301b0/"
            target="_" class="flex items-center gap-1 w-full md:ml-auto">
              <img :src="LinkedIn" alt="behance-logo" class="w-[2.4375rem] h-[2.4375rem]" />
              <span class="underline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </v-app>
</template>
