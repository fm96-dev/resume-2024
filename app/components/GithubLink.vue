<script lang="ts" setup>
export interface Props {
  label?: string;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <a
    class="inline-flex items-center gap-1 px-2 py-1 text-sm transition-colors duration-150 ease-linear rounded bg-slate-300 hover:bg-slate-400 hover:shadow"
    :href="link"
    target="blank"
  >
    <Icon name="uil:github" />
    <slot>{{ label }}</slot>
  </a>
</template>
