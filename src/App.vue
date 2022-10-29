<script setup lang="ts">
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue';
</script>

<template>
  <header class="w-full h-[25vh] min-h-[12rem] lg:h-[30vh] lg:min-h-[17.5rem] ">
    <Header/>
  </header>
  <main class="w-full min-h-[75vh] -mt-20 lg:-mt-32">
    <TodoList/>
  </main>
  <footer class="w-full h-20 flex items-center justify-center select-none">
    <p class="text-dark-gray-300 dark:text-light-gray-100 text-sm">Drag and drop to reorder list</p>
  </footer>
</template>

<style>
  #app {
    @apply w-[100vw] min-h-[100vh] bg-light-gray-200 dark:bg-dark-gray-500 ease-linear duration-100 font-['Josefin_Sans'];
  }
</style>