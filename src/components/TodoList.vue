<script setup>
const todos = $ref([
  { id: 0, title: 'Create a new video', done: false },
  { id: 1, title: 'Finish work', done: false },
  { id: 2, title: 'Watch youtube', done: false }
])

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

const addTodo = (evt) => {
  const data = new FormData(evt.target)

  evt.target.reset()
  todos.push({
    id: todos.length,
    title: data.get('title'),
    done: false,
  })
}
</script>

<template>
  <slot
    :addTodo="addTodo"
    :todos="todos"
    :toggleTodo="toggleTodo"
  />
</template>
