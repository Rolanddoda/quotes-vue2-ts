<template>
  <section class="single-quote">
    <blockquote>
      <p>{{ quote.quote }}</p>
    </blockquote>

    <figcaption>—{{ quote.author }}</figcaption>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";

@Component()
export default class SingleQuote extends Vue {
  @Prop({ required: true, type: Object }) readonly quote: Quote;
}
</script>

<style lang="scss" scoped>
.single-quote {
  width: var(--size);
  height: var(--size);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 0 5px black;
  padding: 20px;

  figcaption {
    text-align: end;
  }
}
</style>
