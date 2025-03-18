<script lang="ts" setup></script>

<template>
  <ul class="list-disc list-inside">
    <li class="mb-1">
      {{ $t("projects.vueInsane") }}

      <GithubLink
        link="https://github.com/fm96-dev/vue-insane"
        class="print:hidden"
      >
        vue-insane
      </GithubLink>
    </li>

    <li class="mb-1">
      {{ $t("projects.jsFactory") }}

      <GithubLink
        link="https://github.com/fm96-dev/js-factory"
        class="print:hidden"
      >
        js-factory
      </GithubLink>
    </li>

    <li class="mb-1">
      {{ $t("projects.openSourceTitle") }}

      <ul class="ml-4 list-disc list-inside">
        <li>
          <b class="font-semibold">Vue Shepherd</b>
          {{ $t("projects.vueShepherd") }}

          <GithubLink
            link="https://github.com/shipshapecode/vue-shepherd"
            class="print:hidden"
          >
            vue-shepherd
          </GithubLink>
        </li>
        <li>
          <b class="font-semibold">BootstrapVue CLI Plugin</b>
          {{ $t("projects.bootstrapVueCliPlugin") }}

          <GithubLink
            class="print:hidden"
            link="https://github.com/GregYankovoy/vue-cli-plugin-bootstrap-vue"
          >
            vue-cli-plugin-bootstrap-vue
          </GithubLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
