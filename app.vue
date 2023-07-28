<script lang="ts" setup>

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
    <header class="flex flex-col px-5 py-16 shadow-md bg-gradient-to-bl from-blue-700 to-indigo-800 text-slate-50 print:bg-none print:text-slate-900 print:shadow-none print:py-8">
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
    </header>

    <div class="container hidden mx-auto print:block">
      <div class="h-[2px] bg-gradient-to-br from-slate-500 to-slate-700 border-t border-slate-500" />
    </div>

    <main class="flex flex-col items-center px-4 py-8 print:py-2">
      <app-section title="">
        Passionate Web Developer with almost 5 years of experience in building Web Sites and Web Apps.<br>
        I help companies to make their products reliable and scalable by following modern standards and best practices.
      </app-section>

      <app-section title="SKILLS">
        <skills-list />
      </app-section>

      <app-section title="Experience">
        <n-timeline>
          <experience-timeline-item
            title="Full Stack Web Developer"
            company="Smart Contact / MeglioQuesto Digital"
            :time="['FEBRUARY 2022', 'CURRENT']"
            :technologies="[
              'JavaScript','Vue', 'TailwindCSS',
              'Laravel', 'PHP', 'MySQL', 'MongoDB',
              'Cypress', 'AWS', 'Webpack', 'Vite.js', 'Docker'
            ]"
          >
            <p class="max-w-[50rem] mb-3">
              Mainly developing new projects and maintaining already created projects
              with Vue on the frontend and Laravel and MySql on the backend.
            </p>
            <p class="max-w-[50rem]">
              Used AWS, AWS Amplify and Laravel Vapor for deployments on new projects;
              AWS Elastic Beanstalk for the older ones.
            </p>
          </experience-timeline-item>

          <experience-timeline-item
            title="Front End Web Developer"
            company="Smart Contact"
            :time="['JUNE 2018', 'JANUARY 2022']"
            :technologies="['JavaScript', 'Vue', 'Bootstrap', 'CSS', 'SCSS', 'Node.js', 'Jest', 'Webpack', 'Vite.js']"
          >
            <ul class="mt-4 list-disc list-inside">
              <li class="mb-1">
                Creating and maintaining Single Page Applications and Landing Pages aimed at lead generation
              </li>
              <li class="mb-1">
                Create a toolkit based on Vue to reduce the landing page's development time <br>
                which consists of a custom landing pages components, a js core library to handle common features and
                <br> vue-cli/vite vue template projects
              </li>
              <li class="mb-1">
                Training and management of the development team
              </li>
            </ul>
          </experience-timeline-item>
        </n-timeline>
      </app-section>

      <app-section title="Personal Projects & Open Source Projects">
        <ul class="list-disc list-inside">
          <li class="mb-1">
            A vue plugin to sanitize HTML strings called vue-insane.
            <github-link link="https://github.com/fech-dev/vue-insane" class="print:hidden">
              vue-insane
            </github-link>
          </li>

          <li class="mb-1">
            A Javascript library to help to generate dynamic fake data.
            <github-link link="https://github.com/fech-dev/js-factory" class="print:hidden">
              js-factory
            </github-link>
          </li>

          <li class="mb-1">
            I also have contributed to two open source projects:
            <ul class="list-disc list-inside">
              <li>
                <b class="font-semibold">Vue Sheppherd</b>
                Help to support vue 3 projects.
                <github-link link="https://github.com/shipshapecode/vue-shepherd" class="print:hidden">
                  vue-sheppherd
                </github-link>
              </li>
              <li>
                <b class="font-semibold">BootstrapVue CLI Plugin</b>
                Add feature to support SCSS setup scaffolding
                <github-link class="print:hidden" link="https://github.com/GregYankovoy/vue-cli-plugin-bootstrap-vue">
                  vue-cli-plugin-bootstrap-vue
                </github-link>
              </li>
            </ul>
          </li>
        </ul>
      </app-section>

      <app-section title="Education">
        <n-timeline>
          <experience-timeline-item
            title="Diploma Informatica e Telecomunicazioni"
            company="I.I.S Michele Giua - Assemini"
            :time="['2011', '2017']"
            :technologies="['C', 'Java', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']"
          >
            The topics addressed are:
            <ul class="mt-1 list-disc list-inside">
              <li>Foundations of Informatics.</li>
              <li>Systems and Networks.</li>
              <li>Object oriented programming.</li>
              <li>Web programming.</li>
            </ul>
          </experience-timeline-item>
        </n-timeline>
      </app-section>
    </main>

    <download-resume-button class="fixed bottom-5 right-8 print:hidden" />

    <footer class="container mx-auto print:hidden">
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

  .n-timeline-item{
    --n-content-font-size: 1.125rem !important;
  }

  @media screen('lg') {
    html{
      font-size: 100%;
    }
  }

</style>
