<template>
  <div id="app">
    <CreateQuote />
    <QuotesWrapper />
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Vue } from "vue-property-decorator";
// Components
import QuotesWrapper from "@/components/QuotesWrapper.vue";
import CreateQuote from "@/components/CreateQuote.vue";

@Component({
  components: {
    QuotesWrapper,
    CreateQuote,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  padding: 25px;
}
</style>
