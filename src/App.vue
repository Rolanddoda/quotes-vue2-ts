<template>
  <div id="app">
    <section class="new-quote">
      <b-button icon-right="plus" type="is-primary">New Quote | </b-button>
    </section>

    <QuotesWrapper />
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Vue } from "vue-property-decorator";
// Components
import QuotesWrapper from "@/components/QuotesWrapper.vue";

@Component({
  components: {
    QuotesWrapper,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  padding: 25px;

  .new-quote {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
}
</style>
