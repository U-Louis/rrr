<template>
  <div
    v-on:click="select()"
    class="w-26 h-26 bg-blue-200 rounded-lg shadow-lg m-2 dark:bg-gray-800"
    :class="[isSelected ? selectionTransform : '']"
  >
    <div class="grid grid-cols-3">
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-green-500 text-xs">
        {{ cardId }}
      </button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
      <button class="w-7 h-7 m-1 rounded-full bg-blue-500"></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["cardId"],
    data() {
      return {
        name: "empty",
        team: "blue",
        state: "normal",
        isSelected: false,
        selectionTransform: `transform
          -translate-y-2
          translate-x-1
          `,
      };
    },

    methods: {
      select() {
        if (this.isSelected === true) {
          this.isSelected = false;
          this.computeSelect;
        } else {
          console.log(this.cardId, " selected");
          this.isSelected = true;
          this.computeSelect;
        }
      },
    },
    computed: {
      computeSelect() {
        if (this.isSelected === true) {
          return this.$store.commit("setSelectedCard", "empty");
        } else {
          return this.$store.commit("setSelectedCard", this.id);
        }
      },
    },
  };
</script>
