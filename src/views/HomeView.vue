<template>
  <slogan />
  <start-quiz-button />
</template>

<script>
import Slogan from "@/components/Home/Slogan.vue";
import StartQuizButton from "@/components/Home/StartQuizButton.vue";

export default {
  name: "HomeView",
  components: { Slogan, StartQuizButton },
};
</script>

