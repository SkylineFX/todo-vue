<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
import { Todo } from '../todo'
import TodoInput from './TodoInput.vue'

// Variables initialization
let todos = ref<Todo[]>([]);
if(localStorage.getItem('todos'))
  todos.value = JSON.parse(localStorage.getItem("todos")!);
let undone = ref<number>(0);
const filter = ref<string>('all');

// Functions
const addTodo = (todo: Todo) => {
  todos.value.push(todo);
  updateTodo();
}

const removeTodo = (todoIndex: number) => {
  todos.value.splice(todoIndex, 1);
  updateTodo();
}

const updateTodo = () => {
  localStorage.setItem("todos", JSON.stringify(todos.value)) 
}

const clearCompleted = () => {
  todos.value = todos.value.filter(item => !item.checked);
  updateTodo();
}

undone = computed(() => {
  let nr = 0;
  todos.value.forEach((todo: Todo) => {
    if(!todo.checked) nr++;
  })
  return nr;
});

const filteredTodos = computed<Todo[]>(() => {
  if(filter.value === "all")
    return todos.value;
  else if (filter.value === "active")
    return todos.value.filter((item) => !item.checked);
  else (filter.value === "completed")
    return todos.value.filter((item) => item.checked);
});

// Drag and drop

</script>

<template>
  <div class="w-[85vw] lg:w-[60vw] xl:w-[40vw] h-full mx-auto">
    <TodoInput @add="addTodo"/>

    <TransitionGroup tag="section" name="fade" class="w-full h-fit">
      <div v-for="(todo, idx) in filteredTodos" :key="todo.text" :class="{round: idx == 0}" class="w-[85vw] lg:w-[60vw] xl:w-[40vw] h-14 lg:h-16 flex items-center justify-between bg-light-gray-100 dark:bg-dark-gray-500-desat border-b-[1px] border-light-gray-200 dark:border-dark-gray-400 px-5">
        <div class="h-[18px] lg:h-6 lg:mr-5 aspect-square mr-4 relative">
          <input type="checkbox" class="h-[18px] lg:h-6 aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 transition-all duration-300 outline-light-gray-300 dark:outline-dark-gray-400 checked:bg-gradient-to-br from-cyan to-purple checked:outline-none dark:checked:outline-none"
              v-model="todo.checked" @change="updateTodo()">
            <font-awesome-icon icon="check" v-show="todo.checked" @click="todo.checked = !todo.checked" class="pointer-events-none text-light-gray-200 cursor-pointer select-none text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </div>
        <div :class="{done: todo.checked}" @click="todo.checked = !todo.checked" class="w-full h-full outline-none text-sm lg:text-xl rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat text-light-gray-500 dark:text-dark-blue-100 flex items-center cursor-pointer select-none">{{todo.text}}</div>
        <font-awesome-icon icon="x" @click="removeTodo(idx)" class="w-4 text-light-gray-300 dark:text-dark-gray-300 cursor-pointer"/>
      </div>

      <div key="buttons" v-if="todos.length" :class="{round: !filteredTodos.length}" class="w-full h-14 flex items-center justify-between bg-light-gray-100 dark:bg-dark-gray-500-desat px-5 rounded-b-md relative">
        <p class="w-28 text-sm text-light-gray-400 dark:text-dark-gray-300">{{undone}} items left</p>
        <div class="w-full h-12 flex items-center justify-center gap-3 rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat absolute left-0 top-[70px] 2xl:w-fit 2xl:static 2xl:top-0">
          <div>
            <label for="all" :class="{active: filter == 'all'}" class="select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100">All</label>
            <input id="all" value="all" type="radio" v-model="filter" class="hidden">
          </div>
          <div>
            <label for="active" :class="{active: filter == 'active'}" class="select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100">Active</label>
            <input id="active" value="active" type="radio" v-model="filter" class="hidden">
          </div>
          <div>
            <label for="completed" :class="{active: filter == 'completed'}" class="select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100">Completed</label>
            <input id="completed" value="completed" type="radio" v-model="filter" class="hidden">
          </div>
        </div>
        <div @click="clearCompleted" class="w-28 text-right cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover ease-linear duration-100 text-sm">Clear Completed</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
  div .done {
    @apply line-through text-light-gray-300 dark:text-dark-gray-300;
  }

  div .round {
    @apply rounded-t-md;
  }

  .active {
    @apply text-bright-blue hover:text-bright-blue !important;
  }

  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-50px);
  }

  .fade-leave-active {
    position: absolute;
  }
</style>