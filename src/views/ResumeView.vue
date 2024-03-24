<script setup lang="ts"></script>

<template>
  <v-container fluid class="flex flex-col gap-y-[4rem]">
    <div class="flex tablet:flex-row justify-between mobile:gap-8 mobile:flex-col ">
      <div class="text-[#123b8a]  align-self-start font-playfair font-bold">
        <h2 class="text-[2.125rem] font-bold ">Silas Owu</h2>
        <span>Frontend Developer</span>
      </div>
      <div class="flex flex-col gap-y-[1rem] ">
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-3 items-center">
            <v-icon icon="mdi-email-outline" color="#123b8a"></v-icon>
            <p class="text-[#272727] text-[1.5rem] underline">owusilasyp00@gmail.com</p>
          </div>
          <div class="flex gap-3 items-center">
            <v-icon icon="mdi-phone-outline" color="#123b8a"></v-icon>
            <p class="flex gap-1">+233 240882452</p>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <v-icon icon="mdi-map-marker-outline" color="#123b8a"></v-icon>
          <p class="flex gap-1">Takoradi, Western Region-Ghana</p>
        </div>
      </div>
    </div>
    
    <div class="flex flex-col gap-y-6">
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Summary</h2>
      </div>
      <ul class="pl-4">
        <li class="text-[#272727] text-[1.25rem] list-disc">
          A self-paced Frontend Developer with less than a year of experience yet with a function of
          continuous learning, fuels of curiosity, and code reviews grows experiential
          knowledge whenever I build projects.
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-y-9">
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Experience</h2>
      </div>
      <div class="pl-4">
        <div class="flex justify-between font-medium text-[1.375rem] tablet:text-[1.125rem] text-[#272727] mobile:flex-col mobile:gap-y-2 ">
          <h3>Amalitech Ghana, National Service Personnel Frontend Junior Associate</h3>
          <span >Nov 2022 - Sept 2023</span>
        </div>
        <ul class="list-disc">
          <li>Acquired best practices in programming for a readable and maintainable codebase</li>
          <li>Worked on the responsiveness of an internal project</li>
          <li>Developed frontend projects and applied agile methodology</li>
          <li>Offered assistance to teammates with their code</li>
        </ul>
      </div>
      <div class="pl-4">
        <div class="flex justify-between font-medium text-[1.375rem] text-[#272727] tablet:text-[1.125rem] mobile:flex-col mobile:gap-y-2">
          <h2 class="font-medium">Amalitech Ghana, UI/UX Designer Intern</h2>
          <span>Oct 2021 - Dec 2021</span>
        </div>
        <ul class="list-disc">
          <li>Designed Mobile UI components on an internal project with Adobe XD</li>
        </ul>
      </div>
      <div class="pl-4">
        <div class="flex justify-between font-medium text-[1.375rem] text-[#272727] tablet:text-[1.125rem] mobile:flex-col mobile:gap-y-2">
          <h2 class="font-medium">Freelance UI/UX Designer </h2><span>March 2022</span>
        </div>
        <ul class="list-disc">
          <li>Designed Mobile UI components of A Health mobile service with Adobe XD</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-y-6">
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Keys Skills & Tools</h2>
      </div>
      <ul class="list-disc pl-4">
        <li>Version control with Git, and Github</li>
        <li>Responsive Design</li>
        <li>VS Code</li>
        <li>Figma</li>
        <li>Intermediate level in ,JS/TS Frontend Frameworks(React,Vue,Angular)</li>
        <li>Beginner level in Component Libraries(Vuetify,Antd)</li>
        <li>Intermediate Tailwindcss/HTML</li>
        <li>Integrate APIs</li>
        <li>Debugging</li>
        <li>Continuous Learning</li>
        <li>Communication and Teamwork</li>
        <li>Diligent and open minded</li>
      </ul>
    </div>
    <div class="flex flex-col gap-y-6">
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Education</h2>
      </div>
      <ul class="list-disc pl-4">
        <li>
          Bachelor of Science in Computer Science, University of Energy and Natural Resources,
          Sunyani-Ghana.2022
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-y-6">
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Certifications</h2>
      </div>
      <ul class="pl-4">
        <li class="list-disc">Create an Advanced Web App with React and Redux Skill Path</li>
        <li>AWS Certified Cloud practitioner</li>
      </ul>
    </div>
    <!-- <div>
      <div class="ps-10 py-6 bg-[#123b8a]">
        <h2 class="text-[#fff] text-[1.75rem] font-bold">Reference</h2>
      </div>
    </div> -->
  </v-container>
</template>
