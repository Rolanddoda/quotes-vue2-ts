<template>
  <div id="app">
    <SingleQuote v-for="quote of quotes" :key="quote.id" :quote="quote" />
  </div>
</template>

<script lang="ts">
import * as apiTo from "@/api";
// Libraries
import { Component, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";
// Components
import SingleQuote from "@/components/SingleQuote.vue";

@Component({
  components: {
    SingleQuote,
  },
})
export default class App extends Vue {
  quotes: Quote[] = [];

  created(): void {
    apiTo.GET_QUOTES().then(({ data }) => (this.quotes = data));
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 25px;
  padding: 25px;
}
</style>
