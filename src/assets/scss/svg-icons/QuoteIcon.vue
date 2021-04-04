<template>
  <div class="quote-icon" :style="{ '--size': size + 'px' }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 24"
      width="100%"
      height="100%"
    >
      <!--  https://www.kmhcreative.com/downloads/CSS2SVG.htm   -->
      <defs>
        <linearGradient
          id="green-gradient"
          gradientUnits="userSpaceOnUse"
          x1="107.44%"
          y1="60.95%"
          x2="-7.44%"
          y2="39.05%"
        >
          <stop stop-color="#00828E" />
          <stop offset="1.942" stop-color="#9BE1AB" />
        </linearGradient>
      </defs>

      <g fill="url(#green-gradient)">
        <path
          d="M0 0v12h8c0 4.41-3.586 8-8 8v4c6.617 0 12-5.383 12-12V0H0zM20 0v12h8c0 4.41-3.586 8-8 8v4c6.617 0 12-5.383 12-12V0H20z"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class QuoteIcon extends Vue {
  @Prop({ default: 48, type: Number }) readonly size!: number;
}
</script>

<style lang="scss" scoped>
.quote-icon {
  width: var(--size);
  height: var(--size);

  svg {
    filter: drop-shadow(2px 4px 6px black);
  }
}
</style>
