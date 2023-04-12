<script lang="ts" setup>
import { variantsClasses } from '~/utils/style'

export interface Props {
  variant?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

</script>

<template>
  <button
    class="flex items-center py-2 px-4 rounded transition-all duration-300 ease-out transform hover:translate-y-[1px] hover:shadow uppercase font-semibold"
    :class="[variantsClasses.get(variant)]"
  >
    <slot />
  </button>
</template>
