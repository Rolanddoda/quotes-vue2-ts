<template>
  <div class="quotes-wrapper">
    <div class="quotes" v-if="quotes">
      <SingleQuote v-for="quote of quotes" :key="quote.id" :quote="quote" />
    </div>

    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
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
  get quotes(): Quote[] | null {
    return this.$store.state.quotes;
  }

  created(): void {
    this.$store.dispatch("fetchQuotes");
  }
}
</script>

<style lang="scss" scoped>
.quotes-wrapper {
  --size: 250px;

  .quotes {
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--size));
    gap: 25px;
  }

  .loading {
    display: flex;
    place-items: center;
  }
}
</style>
