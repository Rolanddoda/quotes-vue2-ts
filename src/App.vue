<template>
  <div id="app" class="bg-dark-gradient">
    <CreateQuote />
    <QuotesWrapper />
  </div>
</template>

<script lang="ts">
import { isDevelopment } from "@/api/utils";
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
export default class App extends Vue {
  created(): void {
    if (!isDevelopment) {
      window.onstorage = () => {
        const quotes = this.$store.state.quotes || [];
        localStorage.setItem("quotes", JSON.stringify(quotes));
      };
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding: var(--size-5);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--orange-gradient);
  }
}
</style>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  overflow: hidden !important;
}

html,
body,
#app {
  height: 100%;
}

body {
  scroll-behavior: smooth;
  overflow: hidden !important;
  font-size: 1.6rem !important;
}
</style>
