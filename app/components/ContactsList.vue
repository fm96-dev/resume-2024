<script lang="ts" setup>
interface Contact {
  href: string|null;
  label: string;
  icon: string;
}

interface Props {
  contacts: Contact[]
}

defineProps<Props>()
</script>

<template>
  <ul
    class="flex flex-wrap justify-center gap-3 mx-auto item-center max-w-xl"
  >
    <li v-for="contact in contacts" :key="contact.label">
      <a
        class="flex items-center leading-no gap-x-1 gap-y-2"
        :href="contact.href || '#'"
      >
        <app-icon :icon="contact.icon" />
        <span> {{ contact.label }} </span>
      </a>
    </li>
  </ul>
</template>
