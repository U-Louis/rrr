<template>
  <div
    v-on:click="cardClicked"
    class="w-26 h-26 bg-blue-200 rounded-lg shadow-lg m-2 dark:bg-gray-800"
    :class="[isSelected ? selectionTransform : '']"
  >
    <king :cardId="this._uid"></king>
  </div>
</template>

<script>
  import King from "./cardCompositions/King.vue";
  export default {
    created() {
      this.$emit("emitCardId", this._uid);
      console.log(this._uid, " emitted");
    },
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
      cardClicked() {
        this.$emit("cardClicked", this._uid);
        this.isSelected = !this.isSelected;
        console.log("clicked ", this._uid);
      },
    },
    computed: {},
    components: {
      King,
    },
  };
</script>
