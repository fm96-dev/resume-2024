<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="py-5">
    <h2 class="mb-5 underline uppercase underline-offset-4">
      {{ title }}
    </h2>

    <slot />
  </section>
</template>
