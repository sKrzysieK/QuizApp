<template>
  <form @submit.prevent="submitForm"><slot></slot></form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateQuizForm",
  props: {},
  methods: {
    ...mapActions(["startQuiz"]),
    async submitForm(e) {
      await this.startQuiz(e);
      this.$router.push("/quiz");
    },
  },
};
</script>

<style scoped>
form {
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 3/2;

  border: 5px solid var(--complementary-color);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 500px) {
  form {
    width: 60%;
  }
}

@media only screen and (min-width: 800px) {
  form {
    width: 40%;
    aspect-ratio: 3/2;
  }
}

@media only screen and (min-width: 1150px) {
  form {
    width: 40%;
    aspect-ratio: 3/2;
  }
}
</style>