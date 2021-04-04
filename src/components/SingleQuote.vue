<template>
  <div class="single-quote">
    <CreateOrUpdateModal v-model="showModal" mode="update" :quote="quote" />

    <section class="quote-card bg-dark-gradient shadow-1">
      <blockquote>
        <p class="text-subtitle-1 text-white-1">{{ quote.quote }}</p>
      </blockquote>

      <figcaption class="text-heading-1 text-orange-gradient">
        —{{ quote.author }}
      </figcaption>

      <section class="actions">
        <BButton
          class="bg-green-gradient"
          :disabled="isDeleting"
          icon-right="pencil"
          type="is-primary"
          @click="showModal = true"
        />

        <BButton
          class="bg-orange-gradient"
          :disabled="isDeleting"
          icon-right="delete"
          type="is-danger"
          @click="deleteQuote"
        />
      </section>
    </section>
  </div>
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
.quote-card {
  position: relative;
  width: var(--size);
  height: var(--size);
  display: grid;
  grid-template-rows: 1fr auto;
  padding: var(--size-6);
  border-radius: var(--size-7);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: var(--shadow-2);
    transform: scale(1.009);

    .actions button {
      transform: scale(1);
    }
  }

  figcaption {
    text-align: end;
  }

  .actions {
    button {
      font-size: var(--size-7);
      position: absolute;
      right: -15px;
      top: 15px;
      transform: scale(0);
      transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);

      + button {
        top: 50px;
      }
    }
  }
}
</style>
