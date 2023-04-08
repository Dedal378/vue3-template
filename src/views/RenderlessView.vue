<script setup>
import Todolist from '@/components/TodoList.vue'
</script>

<template>
  <div class="about flex">
    <Todolist v-slot="{ todos, toggleTodo, addTodo }">
      <ul class="max-w-min mt-16">
        <h2 class="bg-teal5:10 mb-4">Example 1</h2>

        <li
          v-for="todo in todos"
          :key="todo.title"
          class="py-1"
        >
          <input
            @click="toggleTodo(todo.id)"
            :value="todo.done"
            class="accent-green-600"
            type="checkbox"
          >
          {{ todo.title }}
        </li>

        <li class="py-1">
          <form
            @submit.prevent="addTodo"
            class="indent-[17.5]"
          >
            <input
              id="title"
              class="text-white bg-transparent border-b-2 outline-none py-1 px-2"
              name="title"
              placeholder="New Todo"
              type="text"
            >
          </form>
        </li>
      </ul>
    </Todolist>

    <Todolist v-slot="{ todos, toggleTodo, addTodo }">
      <ul
        ref="list"
        class="grid auto-cols-max gap-4 mt-16"
      >
        <h2 class="bg-teal5:10">Example 2</h2>

        <li
          v-for="todo in todos"
          :key="todo.title"
          @click="toggleTodo(todo.id)"
          :class="{ 'border-green text-green': todo.done }"
          class="p-3 text-center border-2 rounded cursor-pointer"
        >
          {{ todo.title }}
        </li>

        <li class="py-1">
          <form
            @submit.prevent="addTodo"
            class="p-3 border-2 border-dashed rounded"
          >
            <input
              id="title"
              class="min-w-full text-white bg-transparent border-b-2 outline-none py-1 px-2"
              name="title"
              placeholder="New Todo"
              type="text"
            >
          </form>
        </li>
      </ul>
    </Todolist>
  </div>
</template>
