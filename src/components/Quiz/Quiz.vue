<template>
  <div id="quiz" v-if="!getIsFinished">
    <Slogan>Question #{{ getCurrQuestionIndex + 1 }}</Slogan>
    <Question :question="getCurrQuestion.question" />
    <Answers :answers="getCurrQuestion.answers" />
  </div>
</template>

<script>
import Slogan from "@/components/Quiz/QuizComponents/Slogan.vue";
import Question from "@/components/Quiz/QuizComponents/Question.vue";
import Answers from "@/components/Quiz/QuizComponents/Answers.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Quiz",
  components: { Slogan, Question, Answers },
  computed: {
    ...mapGetters(["getCurrQuestionIndex", "getCurrQuestion"]),
  },
  methods: {
    ...mapActions(["restoreState"]),
  },
  created() {
    console.log("mounted");
    if (!this.getCurrQuestion) {
      this.restoreState();
    }
  },
};
</script>

<style scoped>
h1 {
  padding: 0;
}

#quiz {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>