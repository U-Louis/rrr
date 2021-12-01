<template>
  <div id="app">
    <Menu></Menu>
    <Board></Board>
  </div>
</template>

<script>
  import Board from "./components/Board.vue";
  import Menu from "./components/Menu.vue";

  export default {
    name: "App",
    components: {
      Menu,
      Board,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
