<!-- eslint-disable vue/no-v-html -->
<script lang="ts" setup>
import Timeline from "primevue/timeline";

interface TimelineEvent {
  title: string;
  company: string;
  time: string;
  technologies: string[];
  description: string;
}

const { t } = useI18n();

const events = computed<TimelineEvent[]>(() => [
  {
    title: "Full Stack Web Developer",
    company: "Smart Contact / Meglioquesto Digital",
    time: t("experienceEvents.0.time"),
    technologies: [
      "JavaScript",
      "TypeScript",
      "Vue",
      "TailwindCSS",
      "Laravel",
      "PHP",
      "MySQL",
      "MongoDB",
      "Cypress",
      "AWS",
      "Webpack",
      "Vite.js",
      "Docker",
    ],
    description: t("experienceEvents.0.description"),
  },
  {
    title: "Front End Web Developer",
    company: "Smart Contact",
    time: t("experienceEvents.1.time"),
    technologies: [
      "JavaScript",
      "Vue",
      "Bootstrap",
      "CSS",
      "SCSS",
      "Node.js",
      "Jest",
      "Webpack",
      "Vite.js",
    ],
    description: t("experienceEvents.1.description"),
  },
]);
</script>

<template>
  <Timeline :value="events">
    <template #content="{ item }">
      <ExperienceTimelineItem v-bind="item">
        <div v-md="item.description" />
      </ExperienceTimelineItem>
    </template>
  </Timeline>
</template>
