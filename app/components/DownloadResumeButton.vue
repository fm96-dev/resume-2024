<script lang="ts" setup>
import Button from "primevue/button";
const { locale, t } = useI18n();

const resumeFilePath = computed<string>(
  () => `/Federico-Mameli_Full-Stack-Web-Developer_resume-${locale.value}.pdf`,
);

const { download: downloadResume } = useDownloadFile(resumeFilePath);
</script>

<template>
  <Button id="resume-btn" @click="() => downloadResume()">
    <Icon name="uil:file-download-alt" class="text-xl" />
    <span>{{ t("downloadResume") }}</span>
  </Button>
</template>

<style lang="postcss" scoped>
#resume-btn span {
  @apply opacity-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 ease-out;
}

#resume-btn:hover span {
  @apply w-full opacity-100;
}
</style>
