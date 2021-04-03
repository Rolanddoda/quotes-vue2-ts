<template>
  <div class="quotes-wrapper">
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
export default class QuotesWrapper extends Vue {
  quotes: Quote[] = [];

  created(): void {
    apiTo.GET_QUOTES().then(({ data }) => (this.quotes = data));
  }
}
</script>

<style lang="scss" scoped>
.quotes-wrapper {
  --size: 250px;

  display: grid;
  grid-template-columns: repeat(auto-fit, var(--size));
  gap: 25px;
}
</style>
