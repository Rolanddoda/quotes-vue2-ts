<template>
  <BModal v-model="isOpen" custom-class="__custom-modal">
    <div class="modal-content-wrapper">
      <header>
        <h1>Create new quote</h1>

        <BButton
          class="bg-green-gradient"
          :disabled="!doesValidationPass"
          type="is-primary"
          :loading="loading"
          @click="save"
        >
          Save
        </BButton>
      </header>

      <div class="fields">
        <BField ref="authorField" label="Author">
          <BInput
            icon="account"
            placeholder="Author name"
            v-model.trim="quoteModel.author"
            required
            :validation-message="validationMessage"
            @keyup.native.enter="save"
          />
        </BField>

        <BField label="Quote">
          <BInput
            placeholder="Quote"
            v-model.trim="quoteModel.quote"
            required
            :validation-message="validationMessage"
            maxlength="229"
            type="textarea"
            @keyup.native.enter="save"
          />
        </BField>
      </div>
    </div>
  </BModal>
</template>

<script lang="ts">
// Libraries
import { Component, Prop, Watch, VModel, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";
type Mode = "create" | "update";

const emptyQuote: Quote = {
  author: "",
  quote: "",
};

@Component
export default class CreateOrUpdateModal extends Vue {
  @Prop({ type: Object, default: () => ({ ...emptyQuote }) })
  readonly quote!: Quote;
  @Prop({
    type: String,
    required: true,
    validator: (value: string): boolean => ["create", "update"].includes(value),
  })
  readonly mode!: Mode;

  @VModel()
  isOpen!: boolean;

  validationMessage = "This field is required";
  quoteModel: Quote = { ...emptyQuote };
  loading = false;

  get doesValidationPass(): boolean {
    return !!this.quoteModel.author.trim() && !!this.quoteModel.quote.trim();
  }

  @Watch("value")
  valueChanged(newVal: boolean): void {
    if (newVal) this.quoteModel = { ...this.quote };
  }

  created(): void {
    this.quoteModel = { ...this.quote };
  }

  save(): void {
    if (!this.doesValidationPass) return;

    this.loading = true;

    if (this.mode === "create") this.createQuote();
    else if (this.mode === "update") this.updateQuote();
  }

  createQuote(): void {
    this.$store
      .dispatch("createQuote", this.quoteModel)
      .then(this.resetModal)
      .finally(() => (this.loading = false));
  }

  updateQuote(): void {
    this.$store
      .dispatch("updateQuote", this.quoteModel)
      .then(this.resetModal)
      .finally(() => (this.loading = false));
  }

  resetModal(): void {
    this.isOpen = false;
    this.quoteModel = { ...emptyQuote };
  }
}
</script>

<style lang="scss" scoped>
.modal-content-wrapper {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }

  .fields {
    margin-top: 15px;
  }
}
</style>

<style lang="scss">
.__custom-modal {
  .modal-content {
    width: 90% !important;
    padding: var(--size-4);
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: var(--white-1);
    border-radius: var(--size-7);

    label {
      color: var(--white-1);
    }
  }

  .modal-background {
    background-color: unset;
    backdrop-filter: blur(2px);
  }
}
</style>
