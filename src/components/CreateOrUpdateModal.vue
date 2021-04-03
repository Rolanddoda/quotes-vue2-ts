<template>
  <BModal v-model="isOpen">
    <div class="modal-content-wrapper">
      <header>
        <h1>Create new quote</h1>

        <BButton type="is-primary">Save</BButton>
      </header>

      <div class="fields">
        <BField ref="authorField" label="Author">
          <BInput
            v-model.trim="quoteModel.author"
            required
            :validation-message="validationMessage"
          />
        </BField>

        <BField label="Quote">
          <BInput
            v-model.trim="quoteModel.quote"
            required
            :validation-message="validationMessage"
            maxlength="229"
            type="textarea"
          />
        </BField>
      </div>
    </div>
  </BModal>
</template>

<script lang="ts">
// Libraries
import { Component, Prop, VModel, Vue } from "vue-property-decorator";
// Types
import { Quote } from "@/types/quote";

const emptyQuote: Quote = {
  author: null,
  quote: null,
};

@Component()
export default class CreateOrUpdateModal extends Vue {
  @Prop({ type: Object, default: () => emptyQuote }) readonly quote: Quote;
  @VModel() isOpen: boolean;

  validationMessage = "This field is required";
  quoteModel: Quote = { ...this.quote };
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
.modal-content {
  width: 90% !important;
  padding: 25px;
  background: white;
}
</style>
