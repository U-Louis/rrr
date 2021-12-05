<template>
  <div>
    <h1>Main grid</h1>
    <div class="grid justify-items-center">
      <div class="grid grid-cols-3 w-max">
        <div v-for="item in grid" :key="item.id">
          <card
            v-on:cardClicked="dispatchClick"
            isDestroyed=false/
            name="empty"
            definition="empty"
            state="none"
            team="neutral"
            locationName="grid"
          ></card>
        </div>
      </div>

      <br />

      <h1>p1 Hand</h1>
      <div class="grid grid-cols-7">
        <div v-for="item in p1Hand" :key="item.id">
          <card
            v-on:cardClicked="dispatchClick"
            isDestroyed=false/
            name="empty"
            definition="king"
            state="none"
            team="red"
            locationName="p1Hand"
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
      dispatchClick(clickedCard) {
        //console.log(clickedCard);
        switch (clickedCard._props.locationName) {
          case "p1Hand":
            this.selectCard(clickedCard);
            break;
          case "grid":
            console.log("grid clicked"); //do replacement

            //check if the move is legit (spot empty or special)

            //replace card on the grid
            if (this.selectedCard != null) {
              console.log("clicked :", clickedCard);
              console.log("selected : ", this.selectedCard);

              clickedCard._props.team = this.selectedCard._props.team;
              clickedCard._props.definition =
                this.selectedCard._props.definition;
            }
            //remove card from hand
            wtf
this.selectedCard._props.isDestroyed = true;

            //empty selection
            break;
          default:
            console.log("prop missiong");
        }
      },

      selectCard(clickedCard) {
        //unshow currently selected card
        if (this.selectedCard != null) {
          this.selectedCard._data.isSelected = false;
        }

        //show clicked card OR unshow if clicked and selected are the same
        if (this.selectedCard != clickedCard) {
          clickedCard._data.isSelected = !clickedCard._data.isSelected;
          this.selectedCard = null;
        }

        //set the new selected card
        this.selectedCard = clickedCard;
      },
    },

    components: {
      Card,
    },
  };
</script>
