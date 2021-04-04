<template>
  <div class="single-quote">
    <CreateOrUpdateModal v-model="showModal" mode="update" :quote="quote" />

    <section
      tabindex="1"
      class="quote-card bg-dark-gradient"
      :style="{ animationDelay: index * 50 + 'ms' }"
    >
      <blockquote>
        <p class="text-subtitle-1 text-white-1">{{ quote.quote }}</p>
      </blockquote>

      <figcaption class="text-heading-1 text-orange-gradient">
        —{{ quote.author }}
      </figcaption>

      <section class="actions">
        <BButton
          tabindex="1"
          class="bg-green-gradient"
          :disabled="isDeleting"
          icon-right="pencil"
          type="is-primary"
          @click="showModal = true"
        />

        <BButton
          tabindex="1"
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
  @Prop({ required: true, type: Number }) readonly index: number;

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
  filter: drop-shadow(var(--shadow-1));
  outline: none;
  transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;
  animation: fadeInScaleIn 0.6s cubic-bezier(0.65, 0, 0.35, 1) both;

  &:hover,
  &:focus,
  &:focus-within {
    filter: drop-shadow(var(--shadow-2));
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
      transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);

      + button {
        top: 50px;
      }

      &:hover,
      &:focus {
        font-size: calc(var(--size-7) + 0.05rem);
      }
    }
  }
}

@keyframes fadeInScaleIn {
  from {
    opacity: 0;
    transform: scale(0.6) translateY(-8px);
  }

  to {
    opacity: 1;
  }
}
</style>
