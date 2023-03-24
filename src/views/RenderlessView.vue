<script setup>
import Todolist from '@/components/TodoList.vue'
</script>

<template>
  <div class="about">
    <h1>This is an renderless component page</h1>

    Example 1
    <Todolist v-slot="{ todos, toggleTodo, addTodo }">
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.title"
          class="py-1"
        >
          <input
            :value="todo.done"
            class="accent-green-600"
            type="checkbox"
            @click="toggleTodo(todo.id)"
          >
          {{ todo.title }}
        </li>

        <li class="py-1">
          <form
            class="indent-[17.5]"
            @submit.prevent="addTodo"
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
    <br >

    Example 2
    <Todolist v-slot="{ todos, toggleTodo, addTodo }">
      <ul
        ref="list"
        class="grid grid-cols-12 gap-8 mt-16"
      >
        <li
          v-for="todo in todos"
          :key="todo.title"
          :class="{ 'border-green text-green': todo.done }"
          class="col-span-4 p-8 text-center border-2 rounded cursor-pointer"
          @click="toggleTodo(todo.id)"
        >
          {{ todo.title }}
        </li>

        <li class="py-1">
          <form
            class="col-span-4 p-8 border-2 border-dashed rounded"
            @submit.prevent="addTodo"
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
