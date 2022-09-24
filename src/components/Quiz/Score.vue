<template>
  <h1>Score</h1>
  <h3>
    You have answered correctly in {{ getScore }} out of questions
    {{ getQuestionsAmount }}
  </h3>
  <ReturnHomeButton />
</template>

<script>
import { mapGetters } from "vuex";
import ReturnHomeButton from "../ui/ReturnHomeButton.vue";
export default {
  name: "Score",
  computed: {
    ...mapGetters(["getScore", "getQuestionsAmount"]),
  },
  components: { ReturnHomeButton },
};
</script>

<style scoped>
h3 {
  color: var(--complementary-color);
  font-size: 2rem;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  h3 {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 600px) and (max-width: 800px) {
  h3 {
    font-size: 1.5rem;
  }
}
</style>