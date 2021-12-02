<template>
  <button
    v-on:click="askNewGame()"
    class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-8 px-4 rounded absolute top-0 left-0 m-2"
  >
    New game
  </button>
</template>

<script>
  export default {
    methods: {
      askNewGame() {
        console.log("new game");
      },
    },
  };
</script>
