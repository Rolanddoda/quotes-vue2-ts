<template>
  <div class="create-quote">
    <b-button icon-right="plus" type="is-primary">New Quote | </b-button>
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class CreateQuote extends Vue {}
</script>

<style lang="scss" scoped>
.create-quote {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
