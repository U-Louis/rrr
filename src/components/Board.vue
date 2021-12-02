<template>
  <div v-on:cardClicked="selectCard" v-on:emitCardId="fillDecks">
    <h1>Main grid</h1>
    <div class="grid justify-items-center">
      <div class="grid grid-cols-3 w-max">
        <div v-for="(item, index) in grid" :key="item.id">
          <card v-bind:cardId="'grid' + index"></card>
        </div>
      </div>

      <br />

      <h1>p1 Hand</h1>
      <div class="grid grid-cols-7">
        <div v-for="(item, index) in p1Hand" :key="item.id">
          <card v-bind:cardId="'p1Hand' + index" id="index"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "./Card.vue";

  export default {
    data() {
      return {
        selectedCard: null,
        grid: new Array(9).fill(1),
        p1Hand: new Array(7).fill(1),
        fillDecksCounter: 0,
      };
    },

    methods: {
      selectCard(clickedCard) {
        if (clickedCard === this.selectedCard) {
          this.selectedCard = null;
        } else {
          if (this.selectedCard != null) {
            console.log("he");
          }
        }
      },

      fillDecks(cardIdReceived) {
        console.log("received");
        if (this.fillDecksCounter < 9) {
          this.grid.push(cardIdReceived);
        } else if (this.fillDecksCounter < 15) {
          this.p1Hand.push(cardIdReceived);
        }
        this.fillDecksCounter++;
        console.log(this.grid, this.p1Hand);
      },
    },

    components: {
      Card,
    },
  };
</script>
