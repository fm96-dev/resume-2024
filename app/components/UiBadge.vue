<script lang="ts" setup>
defineProps<{
  text?: string;
}>();
</script>

<template>
  <span class="rounded-full leading-none px-3 py-1 text-sm font-semibold">
    <slot>{{ text }}</slot>
  </span>
</template>
