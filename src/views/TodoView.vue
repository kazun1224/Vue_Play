<script setup lang="ts">
import { ref } from "vue-demi";

type TODO = {
  id: number;
  todo: string;
  done: boolean;
}
let id: number = 0;
const todos = ref([
  { id: id++, todo: "test", done: false },
  { id: id++, todo: "test", done: false },
  { id: id++, todo: "test", done: false },
]);

const text = ref("")

const  addTodo =() =>   {
  todos.value.push( { id: id++, todo: text.value, done: false });
  text.value = ""


};

const removeTodo = ( todo:TODO):void => {
 todos.value = todos.value.filter((t) => {
    return t !== todo
  })
}
</script>
<template>
  <p-page>
    <h1 class="">TodoApp</h1>

    <form @submit.prevent="addTodo">
      <input v-model="text"  />

      <button >todoの追加</button>
    </form>
    {{text}}
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.todo }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </p-page>
</template>

<style>
h1 {
  font-size: 36px;
}
</style>


