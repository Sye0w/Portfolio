<script setup lang="ts">
import LinkedIn from './assets/linkedin.png'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isClicked = ref<string>('Home')
const clickEfx = (option: string) => {
  isClicked.value = option
}
</script>

<template>
  <v-app class="p-0 m-0 border-box w-full min-h-screen font-manrope">
    <v-app-bar
      scroll-behavior="elevate"
      scroll-threshold="2"
      class="border-b d-flex border-[#123b8a] px-[6.8rem]"
    >
      <!-- <h1 >Syeow</-app-bar-title> -->
      <div class="flex gap-[6.25rem] children:font-medium uppercase">
        <div class="text-[#123B8A] d-flex" @click="clickEfx('Home')">
          <v-icon color="" icon="mdi-home-outline" size="small"></v-icon>
          <router-link
            to="/"
            class="text-[1.25rem]"
            :class="isClicked === 'Home' ? 'text-[#123b8a]' : 'text-[#272727]'"
          >
            Home
          </router-link>
        </div>
        <div class="text-[#272727] hover:text-[#123B8A]" @click="clickEfx('About')">
          <router-link
            class="text-[1.25rem]"
            :class="isClicked === 'About' ? 'text-[#123b8a]' : ''"
            to="/about"
          >
            About
          </router-link>
        </div>
        <div class="text-[#272727] hover:text-[#123B8A]" @click="clickEfx('Resume')">
          <router-link
            class="text-[1.25rem]"
            :class="isClicked === 'Resume' ? 'text-[#123b8a]' : ''"
            to="/resume"
            >Resume</router-link
          >
        </div>
      </div>
    </v-app-bar>
    <v-main class="mx-[6.8rem] my-[6.25rem]">
      <v-fade-transition>
        <RouterView />
      </v-fade-transition>
    </v-main>
    <footer class="bg-[#CFD8EA] w-full h-[21rem] px-[6.8rem]  py-[2.5rem] flex items-center border-2">
      <div class="flex  gap-10 w-full justify-between ">
        <div class="flex flex-col gap-y-[2.5rem] text-[2rem] text-sm-h5">
          <h3 class="text-[#123b8a] font-bold ">Let's chat!</h3>
          <p class="text-[#272727]">owusilasyp00@gmail.com</p>
        </div>
        <div class="items-end flex">
          <div class="items-center text-[1.75rem] text-sm-h5  flex gap-[1.75rem] flex-sm-column  ">
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
