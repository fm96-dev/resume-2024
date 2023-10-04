<script lang="ts" setup>
import Button from 'primevue/button'
const { locale } = useI18n()

const switchLocale = () => {
  locale.value = locale.value === 'it' ? 'en' : 'it'
}
</script>

<template>
  <Button severity="info" class=" w-14" @click="switchLocale">
    <span class="inline-block w-full text-center">{{ locale.toUpperCase() }}</span>
  </Button>
</template>
