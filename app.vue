<script lang="ts" setup>

useHead({ title: 'Federico Mameli | Full Stack Web Developer' })

const contacts = [
  { label: 'Villaspeciosa (SU) Sardinia', href: null, icon: 'map' },
  {
    label: 'federico_mameli@yahoo.com',
    href: 'mailto:federico_mameli@yahoo.com',
    icon: 'envelope-alt'
  },
  { label: '+39 3488077577', href: 'tel:3488077577', icon: 'mobile-android' },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/federicomamelidev',
    icon: 'linkedin'
  },
  {
    label: 'Github',
    href: 'https://github.com/fech-dev',
    icon: 'github'
  }
]

</script>

<template>
  <div class="min-h-screen">
    <header class="relative flex flex-col px-5 py-16 shadow-md bg-gradient-to-bl from-blue-700 to-indigo-800 text-slate-50 print:bg-none print:text-slate-900 print:shadow-none print:py-8">
      <section>
        <div class="text-center">
          <h1 class="leading-none uppercase">
            Federico Mameli
          </h1>
          <h2 class="text-3xl leading-none uppercase lg:text-5xl">
            Full Stack Web Developer
          </h2>
        </div>
      </section>

      <section class="mt-8">
        <contacts-list class="text-lg" :contacts="contacts" />
      </section>

      <div class="absolute print:hidden top-4 right-8 ">
        <AppLocaleSelect />
      </div>
    </header>

    <div class="container hidden print:block">
      <div class="h-[2px] bg-gradient-to-br from-slate-500 to-slate-700 border-t border-slate-500" />
    </div>

    <main class="flex flex-col items-center px-4 py-8 print:py-2">
      <AppSection title="">
        <p v-html="$t('summary')" />
      </AppSection>

      <AppSection title="Skills" class="">
        <skills-list />
      </AppSection>

      <AppSection :title="$t('experience')">
        <TimelinesExperienceTimeline />
      </AppSection>

      <AppSection :title="$t('personalProjects')">
        <PersonalProjectsList />
      </AppSection>

      <AppSection :title="$t('education')">
        <TimelinesEducationTimeline />
      </AppSection>
    </main>

    <div class="fixed print:hidden bottom-5 right-8">
      <DownloadResumeButton />
    </div>

    <footer class="container print:hidden">
      <div class="h-[1px] bg-gradient-to-br from-slate-500 to-slate-700 border-t border-slate-500" />
      <div class="py-10 text-center">
        Federico Mameli - 2023
      </div>
    </footer>
  </div>
</template>

<style lang="postcss">

  html {
    font-size: 81.25%;
  }

  main section{
    @apply w-full max-w-5xl;
  }

  [data-pc-name=timeline] [data-pc-section=opposite] {
    @apply hidden;
  }

  @media screen('lg') {
    html{
      font-size: 100%;
    }
  }

</style>
