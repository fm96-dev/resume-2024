<script lang="ts" setup>
const skills = [
  { label: "html 5", icon: "logos:html-5" },
  { label: "css 3", icon: "logos:css-3" },
  { label: "javascript", icon: "logos:javascript" },
  { label: "typescript", icon: "logos:typescript-icon" },
  { label: "vue", icon: "logos:vue" },
  { label: "nuxt", icon: "logos:nuxt-icon" },
  { label: "sass", icon: "logos:sass" },
  { label: "tailwind", icon: "logos:tailwindcss-icon" },
  { label: "bootstrap", icon: "logos:bootstrap" },
  { label: "node", icon: "logos:nodejs-icon" },
  { label: "php", icon: "logos:php" },
  { label: "laravel", icon: "logos:laravel" },
  { label: "mysql", icon: "logos:mysql-icon" },
  { label: "git", icon: "logos:git-icon" },
  { label: "github", icon: "logos:github-icon" },
  { label: "webpack", icon: "logos:webpack" },
  { label: "vite", icon: "logos:vitejs" },
  { label: "vitest", icon: "logos:vitest" },
  { label: "aws", icon: "logos:aws" },
  { label: "docker", icon: "logos:docker-icon" },
];
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
      <Icon :name="skill.icon" class="text-[2em]" />
      <div class="mt-2 text-xs font-semibold uppercase">
        {{ skill.label }}
      </div>
    </div>
  </div>
</template>
