<template>
  <div id="answer_box">
    <AnswerCard
      v-for="answer in answers"
      :key="answer"
      @click="(e) => onCardClick(e, answer.isCorrect)"
      v-html="answer.text"
    >
    </AnswerCard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AnswerCard from "../QuizComponents/Answers/AnswerCard.vue";
import toggleQuestionTransition from "../../../helpers/toggleQuestionTransition";
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
    onCardClick(e, isCorrect) {
      if (isCorrect) e.target.style.backgroundColor = "green";
      else e.target.style.backgroundColor = "red";
      document
        .querySelectorAll(".answer_card")
        .forEach((answer) => (answer.style.pointerEvents = "none"));
      toggleQuestionTransition();
      setTimeout(() => {
        this.nextQuestion(isCorrect);
      }, 3000);
    },
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