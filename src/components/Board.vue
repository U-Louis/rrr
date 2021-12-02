<template>
  <div>
    <h1>Main grid</h1>
    <div class="grid justify-items-center">
      <div class="grid grid-cols-3 w-max">
        <div v-for="item in grid" :key="item.id">
          <card
            v-on:emitCardId="fillDecks"
            v-on:cardClicked="selectCard"
            name="empty"
            definition="empty"
            state="none"
            team="neutral"
          ></card>
        </div>
      </div>

      <br />

      <h1>p1 Hand</h1>
      <div class="grid grid-cols-7">
        <div v-for="item in p1Hand" :key="item.id">
          <card
            v-on:emitCardId="fillDecks"
            v-on:cardClicked="selectCard"
            name="empty"
            definition="king"
            state="none"
            team="red"
          ></card>
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
        //TODO
        console.log("clicked : ", clickedCard);
        if (clickedCard === this.selectedCard) {
          this.selectedCard = null;
        } else {
          if (this.selectedCard != null) {
            console.log("he");
          }
        }
      },

      fillDecks(cardIdReceived) {
        let i = this.fillDecksCounter;
        if (i < 9) {
          this.grid[i] = cardIdReceived;
        } else if (i < 16) {
          this.p1Hand[i - 9] = cardIdReceived; //for p2, use -16 and so on
        }
        this.fillDecksCounter++;
        //console.log(this.grid, this.p1Hand);
      },
    },

    components: {
      Card,
    },
  };
</script>
