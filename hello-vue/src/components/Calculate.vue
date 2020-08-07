<template>
  <div class="hello">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">Increase</button>
    <br /><br />
    <button @click="showAlert">Alert It</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    function increment() {
      counter.value++;
    }

    function showAlert() {
      alert("Your counter is: " + counter.value);
    }
    return { counter, increment, showAlert };
  }
};
</script>

<style scoped></style>
