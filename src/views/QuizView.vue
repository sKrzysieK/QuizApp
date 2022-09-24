<template>
  <Quiz v-if="!getIsFinished" />
  <Score v-else />
</template>

<script>
import { mapGetters } from "vuex";
import Quiz from "@/components/Quiz/Quiz.vue";
import Score from "@/components/Quiz/Score.vue";

export default {
  computed: {
    ...mapGetters(["getIsFinished"]),
  },
  unmounted() {
    console.log("unmounted");
    localStorage.removeItem("isFinished");
    localStorage.removeItem("currQuestionIndex");
    localStorage.removeItem("questions");
    localStorage.removeItem("settings");
    localStorage.removeItem("score");
  },
  components: { Quiz, Score },
};
</script>
