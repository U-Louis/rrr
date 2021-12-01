<template>
  <div
    v-on:click="select()"
    class="w-26 h-26 bg-blue-200 rounded-lg shadow-lg m-2 dark:bg-gray-800"
    :class="[isSelected ? selectionTransform : '']"
  >
    <king></king>
    {{ cardId }}
  </div>
</template>

<script>
  import King from "./cardCompositions/King.vue";
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
    components: {
      King,
    },
  };
</script>
