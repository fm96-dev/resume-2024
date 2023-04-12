<script lang="ts" setup>
import { technologiesColorsClasses } from '~/utils/style'

defineProps<{
  time?: [string, string],
  title: string,
  company?: string,
  technologies: string[],
  description?: string,
  github?: string
}>()

const getTechnologyColorClass = (technology: string) => technologiesColorsClasses.get(technology)
</script>

<template>
  <n-timeline-item>
    <template #header>
      <h3 class="flex gap-2 items-center">
        {{ title }}
        <a v-if="github" :href="github" target="blank" class="text-xl hover:text-2xl transition-all duration-200 hover:text-blue-600 ease-out">
          <app-icon icon="github" />
        </a>
      </h3>

      <div v-if="company" class="flex gap-1 items-center mb-1 text-lg">
        <app-icon icon="building" />
        <strong class="font-semibold">
          {{ company }}
        </strong>
      </div>

      <div v-if="time" class="text-slate-500 text-sm">
        {{ time.join(' - ') }}
      </div>
    </template>

    <template #default>
      <div class="flex gap-2 flex-wrap my-2">
        <ui-badge
          v-for="(technology, i) of technologies"
          :key="i"
          class="text-slate-100"
          :class="getTechnologyColorClass(technology)"
        >
          {{ technology }}
        </ui-badge>
      </div>

      <div class="mt-2">
        <slot>{{ description }}</slot>
      </div>
    </template>
  </n-timeline-item>
</template>
