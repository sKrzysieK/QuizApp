<template>
  <FormSection>
    <FormLabel>How many questions do you want?</FormLabel>
    <div id="questions_amount">
      <input
        type="range"
        name="questions_amount"
        id="questions_amount_input"
        :min="minAmount"
        :max="maxAmount"
        step="1"
        v-model="currAmount"
      />
      <p id="questions_amount_counter">{{ currAmount }}</p>
    </div>
  </FormSection>
</template>

<script>
import FormSection from "../form/FormSection.vue";
import FormLabel from "../form/FormLabel.vue";
export default {
  name: "QuestionAmountSection",
  components: { FormSection, FormLabel },
  data() {
    return {
      currAmount: 5,
      minAmount: 3,
      maxAmount: 30,
    };
  },
};
</script>


<style scoped>
#questions_amount {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#questions_amount * {
  margin: 10px 0px;
  padding: 0;
}

#questions_amount_counter {
  width: 50px;
  aspect-ratio: 1/1;
  font-size: 2rem;
  border: 3px solid var(--text-color);
  border-radius: 50%;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 800px) {
  #questions_amount_counter {
    width: 50px;
    aspect-ratio: 1/1;
    font-size: 2rem;
  }
}

@media only screen and (min-width: 1150px) {
  #questions_amount_counter {
    width: 50px;
    aspect-ratio: 1/1;
    font-size: 2rem;
  }
}
</style>