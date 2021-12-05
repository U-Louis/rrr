<template>
  <div
    v-if="isDestroyed"
    v-show="isDestroyed"
    v-on:click="cardClicked"
    class="w-26 h-26 rounded-lg shadow-lg m-2 dark:bg-gray-800"
    :class="[
      isSelected ? selectionTransform : '',
      team == 'blue'
        ? 'bg-blue-200'
        : team == 'red'
        ? 'bg-red-200'
        : 'bg-gray-50',
    ]"
  >
    <empty :is="definition"></empty>
  </div>
</template>

<script>
  import King from "./cardCompositions/King.vue";
  import Empty from "./cardCompositions/Empty.vue";

  export default {
    created() {
      this.$emit("emitCardId", this._uid);
      //console.log(this._uid, " emitted");
    },

    props: {
      isDestroyed: Boolean,
      name: String,
      definition: String,
      team: String,
      state: String,
      locationName: String,
      locationNumber: Number,
    },

    data() {
      return {
        isSelected: false,
        selectionTransform: `
        animate-pulse
                transform
          -translate-y-2
          scale-110
          `,
        //FROM PROPS  : TODO:repass props as data
      };
    },

    methods: {
      cardClicked() {
        this.$emit("cardClicked", this);
      },
    },

    computed: {},
    components: {
      King,
      Empty,
    },
  };
</script>
