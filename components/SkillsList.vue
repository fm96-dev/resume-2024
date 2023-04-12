<script lang="ts" setup>

const skills = [
  { label: 'html 5', icon: 'html5' },
  { label: 'css 3', icon: 'css3' },
  { label: 'javascript', icon: 'javascript' },
  { label: 'typescript', icon: 'typescript' },
  { label: 'vue', icon: 'vue' },
  { label: 'nuxt', icon: 'nuxt' },
  { label: 'sass', icon: 'sass' },
  { label: 'tailwind', icon: 'tailwind' },
  { label: 'bootstrap', icon: 'bootstrap' },
  { label: 'bulma', icon: 'bulma' },
  { label: 'node', icon: 'node' },
  { label: 'mongo', icon: 'mongo' },
  { label: 'laravel', icon: 'laravel' },
  { label: 'mysql', icon: 'mysql' },
  { label: 'git', icon: 'git' },
  { label: 'github', icon: 'github' },
  { label: 'webpack', icon: 'webpack' },
  { label: 'vite', icon: 'vite' },
  { label: 'aws', icon: 'aws' },
  { label: 'docker', icon: 'docker' }
]
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-x-3 gap-y-5 mx-auto"
  >
    <div
      v-for="(skill, i) of skills"
      :key="i"
      class="flex flex-col items-center p-3 delay-75 rounded shadow"
    >
      <app-icon :icon="skill.icon" class="text-[2em]" />
      <div class="mt-2 text-xs font-semibold uppercase ">
        {{ skill.label }}
      </div>
    </div>
  </div>
</template>
