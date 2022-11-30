<script setup lang="ts">
import { ref } from "vue-demi"
let id:number = 0
const todos = ref([
  {id: id++, todo: "test", done: false},
  {id: id++, todo: "test", done: false},
  {id: id++, todo: "test", done: false}
])

</script>
<template>
  <p-page>
    <h1 class="">TodoApp</h1>
    <input type="text" >

    <ul>
      <li></li>
    </ul>
  </p-page>
</template>

<style>
h1 {
  font-size: 36px
}
</style>
