<script lang="ts" setup>
import Button from 'primevue/button'
const { locale } = useI18n()

const resumeFilePath = computed<string>(() => `/federico_mameli_resume_2023_${locale.value}.pdf`)

const { download: downloadResume } = useDownloadFile(resumeFilePath)
</script>

<template>
  <Button
    id="resume-btn"
    @click="() => downloadResume()"
  >
    <app-icon icon="file-download" class="text-xl" />
    <span>{{ $t('downloadResume') }}</span>
  </Button>
</template>

<style lang="postcss" scoped>
  #resume-btn span{
    @apply opacity-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 ease-out;
  }

  #resume-btn:hover span{
    @apply w-full opacity-100;
  }
</style>
