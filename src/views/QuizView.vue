<template>
  <div id="quiz" v-if="!getIsFinished">
    <Slogan>Question #{{ getCurrQuestionIndex + 1 }}</Slogan>
    <Question :question="getCurrQuestion.question" />
    <div id="answer_box">
      <button
        class="answer_card"
        v-for="answer in getCurrQuestion.answers"
        :key="answer"
        @click="nextQuestion(answer.isCorrect)"
      >
        {{ answer.text }}
      </button>
    </div>
  </div>
  <div v-else>aaaa</div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Slogan from "@/components/Quiz/Slogan.vue";
import Question from "@/components/Quiz/Question.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getQuizSettings",
      "getAllQuestions",
      "getCurrQuestionIndex",
      "getCardColors",
      "getCurrQuestion",
      "getScore",
      "getIsFinished",
    ]),
  },
  methods: {
    ...mapActions([
      // "increamentCurrQuestionIndex",
      "nextQuestion",
      "restoreState",
      // "fetchQuestions",
    ]),
  },
  // async created() {
  //   // await this.fetchQuestions();
  //   if (!this.getCurrQuestion || this.getCurrQuestion?.length === 0)
  //     this.$router.push("/new-quiz");
  // },
  created() {
    console.log("mounted");
    if (!this.getCurrQuestion) {
      this.restoreState();
    }
  },
  unmounted() {
    console.log("unmounted");
    localStorage.removeItem("isFinished");
    localStorage.removeItem("currQuestionIndex");
    localStorage.removeItem("questions");
    localStorage.removeItem("settings");
    localStorage.removeItem("score");
  },
  components: { Slogan, Question },
};
</script>


<style scoped>
h1 {
  padding: 0;
}

/* h3 {
  margin: 0;
  font-size: 2.5rem;
} */

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

#question {
  width: calc(100% - 40px);
  padding: 20px;
  font-size: 1rem;
  background-color: var(--complementary-color);
  color: var(--primary-background-color);
  font-weight: bold;
}

#answer_box {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}

.answer_card {
  width: 90%;
  aspect-ratio: 1/1.25;
  max-height: 25%;
  margin-bottom: 5px;
  font-size: 1.5rem;
  background-color: var(--secondary-background-color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: 0.3s ease-in-out;
}

.answer_card * {
  pointer-events: none;
}

.answer_card:active {
  scale: 0.85;
  transition: 0.2s ease-in-out;
}

.answer_card:hover {
  scale: 1.1;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

@media only screen and (min-width: 500px) and (max-width: 800px) {
  #question {
    width: 50%;
    padding: 40px;
    font-size: 1.3rem;
  }

  #answer_box {
    width: 480px;
    aspect-ratio: 1/1;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    gap: 20px 20px;
    /* flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; */
  }

  .answer_card {
    width: 100%;
    max-height: 100%;
    font-size: 1.5rem;
    aspect-ratio: 1/1;
    /* margin-right: 25px; */
    justify-self: center;
  }
}

@media only screen and (min-width: 800px) {
  /* h3 {
    font-size: 4rem;
  } */

  #question {
    width: 50%;
    font-size: 1.5rem;
  }

  #answer_box {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  }

  .answer_card {
    width: 20%;
    aspect-ratio: 2/3;
    max-height: 100%;
    font-size: 1.8rem;
  }
}

@media only screen and (min-width: 1150px) {
  /* h3 {
    font-size: 4rem;
  } */

  #question {
    width: 50%;
    padding: 40px;
    font-size: 2rem;
  }

  #answer_box {
    flex-direction: row;
  }

  .answer_card {
    width: 20%;
    aspect-ratio: 1/1.25;
    max-height: 100%;
    font-size: 2rem;
  }
}
</style>