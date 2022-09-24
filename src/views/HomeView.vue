<template>
  <slogan />
  <start-quiz-button />
</template>

<script>
import Slogan from "@/components/Home/Slogan.vue";
import StartQuizButton from "@/components/Home/StartQuizButton.vue";
import clearLocalStorage from "@/helpers/clearLocalStorage";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: { Slogan, StartQuizButton },
  methods: {
    ...mapActions(["resetState"]),
  },
  created() {
    clearLocalStorage();
    this.resetState();
  },
};
</script>

