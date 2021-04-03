<template>
  <div class="create-quote">
    <CreateOrUpdateModal v-model="showModal" mode="create" />
    <b-button icon-right="plus" type="is-primary" @click="showModal = true">
      New Quote |
    </b-button>
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
}
</style>
