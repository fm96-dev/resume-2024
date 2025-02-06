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
    title: "Diploma Informatica e Telecomunicazioni",
    company: "I.I.S Michele Giua - Assemini",
    time: "2011 - 2017",
    technologies: ["C", "Java", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description: t("educationEvents.0.description"),
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
