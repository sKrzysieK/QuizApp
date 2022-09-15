<template>
  <FormSection>
    <FormLabel>Choose your difficulty level:</FormLabel>
    <div id="difficulty_container">
      <DifficultyRadioInput :radio-value="'easy'" />
      <DifficultyRadioInput :radio-value="'medium'" :checked="true" />
      <DifficultyRadioInput :radio-value="'hard'" />
    </div>
  </FormSection>
</template>

<script>
import FormLabel from "../FormLabel.vue";
import FormSection from "../FormSection.vue";
import DifficultyRadioInput from "./DifficultySection/DifficultyRadioInput.vue";
export default {
  name: "DifficultySection",
  components: {
    FormLabel,
    FormSection,
    DifficultyRadioInput,
  },
  data() {
    return {
      values: ["easy", "medium", "hard"],
    };
  },
};
</script>


<style scoped>
</style>