<template>
  <section class="single-quote">
    <CreateOrUpdateModal v-model="showModal" mode="update" :quote="quote" />

    <blockquote>
      <p>{{ quote.quote }}</p>
    </blockquote>

    <figcaption>—{{ quote.author }}</figcaption>

    <section class="actions">
      <BButton
        :disabled="isDeleting"
        icon-right="pencil"
        type="is-primary"
        @click="showModal = true"
      />

      <BButton
        :disabled="isDeleting"
        icon-right="delete"
        type="is-danger"
        @click="deleteQuote"
      />
    </section>
  </section>
</template>

<script lang="ts">
// Libraries
import { Component, Prop, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";
// Components
import CreateOrUpdateModal from "@/components/CreateOrUpdateModal.vue";

@Component({
  components: {
    CreateOrUpdateModal,
  },
})
export default class SingleQuote extends Vue {
  @Prop({ required: true, type: Object }) readonly quote: Quote;

  showModal = false;
  isDeleting = false;

  deleteQuote(): void {
    this.isDeleting = true;

    this.$store
      .dispatch("deleteQuote", this.quote.id)
      .finally(() => (this.isDeleting = false));
  }
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

  .actions {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    justify-content: end;
    padding-top: 5px;
  }
}
</style>
