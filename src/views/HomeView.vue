<template>
  <slogan />
  <start-quiz-button />
</template>

<script>
import Slogan from "@/components/Home/Slogan.vue";
import StartQuizButton from "@/components/Home/StartQuizButton.vue";
import clearLocalStorage from "@/helpers/clearLocalStorage";

export default {
  name: "HomeView",
  components: { Slogan, StartQuizButton },
  created() {
    clearLocalStorage();
  },
};
</script>

