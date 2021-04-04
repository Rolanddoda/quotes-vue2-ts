<template>
  <div class="create-quote">
    <CreateOrUpdateModal v-model="showModal" mode="create" />

    <button
      tabindex="1"
      class="animated-btn text-subtitle-1"
      @click="showModal = true"
    >
      New Quote
    </button>
  </div>
</template>

<script lang="ts">
// Libraries
import { Component, Vue } from "vue-property-decorator";
import CreateOrUpdateModal from "@/components/CreateOrUpdateModal.vue";

@Component({
  components: {
    CreateOrUpdateModal,
  },
})
export default class CreateQuote extends Vue {
  showModal = false;
}
</script>

<style lang="scss" scoped>
.create-quote {
  position: fixed;
  bottom: var(--size-6);
  right: var(--size-6);
  z-index: 1;
  background: var(--white-1);
  line-height: initial;

  .animated-btn {
    --duration-timing: 0.4s ease-in-out;

    position: relative;
    padding: 8px 35px;
    border: 2px solid var(--primary-1);
    background: transparent;
    overflow: hidden;
    transition: color var(--duration-timing);
    cursor: pointer;
    font-size: 16px;
    line-height: initial;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: var(--primary-1);
      transform: translateX(-100%);
      transition: transform var(--duration-timing);
      z-index: -1;
    }

    &:hover {
      color: var(--white-1);

      &:before {
        transform: translateX(0);
      }
    }
  }
}
</style>
