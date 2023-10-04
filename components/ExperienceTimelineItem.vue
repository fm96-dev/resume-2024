<script lang="ts" setup>
import { technologiesColorsClasses } from '~/utils/style'

interface Props {
  title: string,
  company?: string,
  time?: string,
  technologies: string[],
  description?: string,
  github?: string
}

defineProps<Props>()

const getTechnologyColorClass = (technology: string) => technologiesColorsClasses.get(technology)
</script>

<template>
  <div class="mb-5">
    <h3 class="flex items-center gap-2 text-3xl">
      {{ title }}
      <a v-if="github" :href="github" target="blank" class="text-xl transition-all duration-200 ease-out hover:text-2xl hover:text-blue-600">
        <app-icon icon="github" />
      </a>
    </h3>

    <div v-if="company" class="flex items-center gap-1 mb-1 ">
      <app-icon icon="building" />
      <strong class="font-semibold">
        {{ company }}
      </strong>
    </div>

    <div v-if="time" class="text-sm text-slate-500">
      {{ time }}
    </div>

    <div class="flex flex-wrap gap-2 my-2">
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
  </div>
</template>
