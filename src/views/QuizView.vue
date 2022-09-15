<template>
  <!-- <div id="quiz" v-if="!getIsFinished">
    <Slogan>Question #{{ getCurrQuestionIndex + 1 }}</Slogan>
    <Question :question="getCurrQuestion.question" />
    <Answers :answers="getCurrQuestion.answers" />
  </div> -->
  <Quiz v-if="!getIsFinished" />
  <div v-else>aaaa</div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Slogan from "@/components/Quiz/QuizComponents/Slogan.vue";
import Question from "@/components/Quiz/QuizComponents/Question.vue";
import Answers from "@/components/Quiz/QuizComponents/Answers.vue";
import Quiz from "@/components/Quiz/Quiz.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      // "getQuizSettings",
      // "getAllQuestions",
      "getCurrQuestionIndex",
      // "getCardColors",
      "getCurrQuestion",
      // "getScore",
      "getIsFinished",
    ]),
  },
  methods: {
    ...mapActions(["restoreState"]),
  },
  unmounted() {
    console.log("unmounted");
    localStorage.removeItem("isFinished");
    localStorage.removeItem("currQuestionIndex");
    localStorage.removeItem("questions");
    localStorage.removeItem("settings");
    localStorage.removeItem("score");
  },
  // async created() {
  //   // await this.fetchQuestions();
  //   if (!this.getCurrQuestion || this.getCurrQuestion?.length === 0)
  //     this.$router.push("/new-quiz");
  // },
  // created() {
  //   console.log("mounted");
  //   if (!this.getCurrQuestion) {
  //     this.restoreState();
  //   }
  // },
  // unmounted() {
  //   console.log("unmounted");
  //   localStorage.removeItem("isFinished");
  //   localStorage.removeItem("currQuestionIndex");
  //   localStorage.removeItem("questions");
  //   localStorage.removeItem("settings");
  //   localStorage.removeItem("score");
  // },
  components: { Slogan, Question, Answers, Quiz },
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