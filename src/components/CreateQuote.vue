<template>
  <div class="create-quote">
    <CreateOrUpdateModal v-model="showModal" mode="create" />

    <button class="animated-btn" @click="showModal = true">New Quote</button>
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
  bottom: 20px;
  right: 20px;
  z-index: 1;

  .animated-btn {
    --duration-timing: 0.4s ease-in-out;

    position: relative;
    padding: 8px 35px;
    border: 2px solid #1c1c22;
    background: transparent;
    overflow: hidden;
    transition: color var(--duration-timing);
    cursor: pointer;
    font-size: 16px;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #00c4a7;
      transform: translateX(-100%);
      transition: transform var(--duration-timing);
      z-index: -1;
    }

    &:hover {
      color: white;

      &:before {
        transform: translateX(0);
      }
    }
  }
}
</style>
