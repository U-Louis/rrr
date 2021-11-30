<template>
  <div>
    <h1>Main grid</h1>
    <div class="grid justify-items-center">
      <div class="grid grid-cols-3 w-max">
        <div v-for="item in grid" :key="item.id">
          <card></card>
        </div>
      </div>

      <br />

      <h1>p1 Hand</h1>
      <div class="grid grid-cols-7">
        <div v-for="item in p1Hand" :key="item.id">
          <card></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "./Card.vue";

  let grid = new Array(9).fill(0);
  let p1Hand = new Array(7).fill(1);

  export default {
    data() {
      return {
        grid: grid,
        p1Hand: p1Hand,
      };
    },

    methods: {},

    components: {
      Card,
    },
  };
</script>
