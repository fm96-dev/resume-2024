<template>
  <ui-button id="resume-btn" class="gap-2">
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
