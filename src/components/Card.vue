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
        {{ name }}
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
    data() {
      return {
        name: "empty",
        id: this._uid,
        isSelected: false,
        selectionTransform: `transform
          -translate-y-2
          translate-x-1
          `,
      };
    },
    methods: {
      select() {
        console.log(this.$store.state.selectedCard);
        if (this.isSelected === true) {
          this.isSelected = false;
          this.$store.commit("setSelectedCard", "empty");
        } else {
          this.isSelected = true;
          this.$store.commit("setSelectedCard", this.id);
          console.log(this.id, " selected");
        }
      },
    },
  };
</script>
