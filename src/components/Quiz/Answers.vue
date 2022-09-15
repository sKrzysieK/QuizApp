<template>
  <div id="answer_box">
    <AnswerCard
      v-for="answer in answers"
      :key="answer"
      @click="nextQuestion(answer.isCorrect)"
    >
      {{ answer.text }}
    </AnswerCard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AnswerCard from "./Answers/AnswerCard.vue";
export default {
  name: "Answers",
  props: {
    answers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["nextQuestion"]),
  },
  components: { AnswerCard },
};
</script>

<style scoped>
#answer_box {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}

@media only screen and (min-width: 500px) and (max-width: 800px) {
  #answer_box {
    width: 480px;
    aspect-ratio: 1/1;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    gap: 20px 20px;
  }
}

@media only screen and (min-width: 800px) {
  #answer_box {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  }
}

@media only screen and (min-width: 1150px) {
  #answer_box {
    flex-direction: row;
  }
}
</style>