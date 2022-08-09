<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <TransitionGroup tag="div" name="rotate" class="w-fit h-fit rounded-full cursor-pointer" @click="toggleDark()">
    <img src="/src/assets/images/icon-sun.svg" alt="" v-if="isDark" class="w-5 h-5 fill-dark-gray-300 dark:fill:light-gray-100" key="sun">
    <img src="/src/assets/images/icon-moon.svg" alt="" v-if="!isDark" class="w-5 h-5 fill-dark-gray-300 dark:fill:light-gray-100" key="moon">
  </TransitionGroup>
</template>

<style>
  html.dark {
    color-scheme: dark;
  }

  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.5s ease;
  }

  .rotate-enter-from,
  .rotate-leave-to {
    opacity: 0;
    transform: rotate(90deg);
  }

  .rotate-leave-active {
    position: absolute;
  }
</style>