<template>
  <section class="single-quote bg-dark-gradient shadow-1">
    <CreateOrUpdateModal v-model="showModal" mode="update" :quote="quote" />

    <blockquote>
      <p class="text-subtitle-1 text-white-1">{{ quote.quote }}</p>
    </blockquote>

    <figcaption class="text-heading-1 text-orange-gradient">
      —{{ quote.author }}
    </figcaption>

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
  padding: 20px;
  border-radius: var(--size-7);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: scale(1.009);
  }

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
