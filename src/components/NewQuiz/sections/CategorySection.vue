<template>
  <FormSection>
    <FormLabel>Select a category:</FormLabel>
    <CategorySelect :categories="categories" />
  </FormSection>
</template>

<script>
import FormSection from "../form/FormSection.vue";
import FormLabel from "../form/FormLabel.vue";
import CategorySelect from "./CategorySection/CategorySelect.vue";
export default {
  components: {
    FormSection,
    FormLabel,
    CategorySelect,
  },
  props: {
    categories: Array,
  },
};
</script>

<style scoped>
</style>