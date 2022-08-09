<script setup lang="ts">
import { ref } from 'vue'
import { Todo } from '../todo'

const emit = defineEmits(['add'])

const checkValue = ref(false);
const textValue = ref('');

const createTodo = (checked: boolean, text: string) => {
  if(!text) return;
  const todo = new Todo(checked, text);
  emit('add', todo);
  checkValue.value = false; 
  textValue.value = '';
}
</script>

<template>
  <div class="w-full h-12 mb-[20px] lg:h-16 flex items-center rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat px-5">
    <div class="h-[18px] lg:h-6 lg:mr-5 aspect-square mr-4 relative">
      <input type="checkbox" class="h-[18px] lg:h-6 aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 transition-all duration-300 outline-light-gray-300 dark:outline-dark-gray-400 checked:bg-gradient-to-br from-cyan to-purple checked:outline-none dark:checked:outline-none"
        v-model="checkValue">
        <font-awesome-icon icon="check" v-show="checkValue" @click="checkValue = !checkValue" class="pointer-events-none text-light-gray-100 cursor-pointer select-none text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </div>
    <input type="text" placeholder="Create a new todo..." class="w-full h-full outline-none text-sm lg:text-xl rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat text-light-gray-500 dark:text-dark-blue-100" @keyup.enter="createTodo(checkValue, textValue)"
      v-model="textValue">
  </div>
</template>