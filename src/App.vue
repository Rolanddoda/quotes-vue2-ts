<template>
  <div id="app"></div>
</template>

<script lang="ts">
import * as apiTo from "@/api";
import { Component, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";

@Component()
export default class App extends Vue {
  quotes: Quote[] = [];

  created(): void {
    apiTo.GET_QUOTES().then(({ data }) => (this.quotes = data));
  }
}
</script>
