<template>
  <div class="quotes-wrapper">
    <div v-if="!quotes" class="loading">Loading...</div>

    <div v-else-if="!quotes.length" class="no-data">
      <NoDataIcon />
      <div class="text-heading-1 text-white-1">
        No quotes! Go and create some!
      </div>
    </div>

    <div class="quotes" v-else>
      <SingleQuote v-for="quote of quotes" :key="quote.id" :quote="quote" />
    </div>
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";
// Components
import SingleQuote from "@/components/SingleQuote.vue";
import NoDataIcon from "@/components/NoDataIcon";

@Component({
  components: {
    SingleQuote,
    NoDataIcon,
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

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .quotes {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--size));
    align-content: start;
    gap: var(--size-4);
  }

  .loading {
    display: flex;
    place-items: center;
  }

  .no-data {
    display: grid;
    justify-items: center;
  }
}
</style>
