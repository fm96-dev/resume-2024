<script lang="ts" setup>
const { download: downloadResume } = useDownloadFile('/federico_mameli_resume_2023.pdf')
</script>

<template>
  <ui-button id="resume-btn" class="hover:gap-2" @click="downloadResume">
    <app-icon icon="file-download" class="text-xl" />
    <span>Download Resume</span>
  </ui-button>
</template>

<style lang="postcss" scoped>
  #resume-btn span{
    @apply opacity-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 ease-out;
  }

  #resume-btn:hover span{
    @apply w-full opacity-100;
  }
</style>
