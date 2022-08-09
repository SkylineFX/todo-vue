<script setup lang="ts">
import ThemeSwitch from './ThemeSwitch.vue'
</script>

<template>
  <div class="w-full h-full bg-wave-header-light dark:bg-wave-header-dark bg-no-repeat bg-center bg-cover overflow-auto">
    <div class="w-[85vw] lg:w-[60vw] xl:w-[40vw] h-fit flex justify-between mt-12 mb-12 mx-auto text-center">
      <h1 class="text-3xl font-bold text-dark-gray-300 dark:text-light-gray-100 tracking-[.5em] uppercase select-none">Todo</h1>
      <ThemeSwitch/>
    </div>
  </div>
</template>