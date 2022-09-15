<template>
  <div id="question">{{ question }}</div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#question {
  width: calc(100% - 40px);
  padding: 20px;
  font-size: 1rem;
  background-color: var(--complementary-color);
  color: var(--primary-background-color);
  font-weight: bold;
}

@media only screen and (min-width: 500px) and (max-width: 800px) {
  #question {
    width: 50%;
    padding: 40px;
    font-size: 1.3rem;
  }
}

@media only screen and (min-width: 800px) {
  #question {
    width: 50%;
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 1150px) {
  #question {
    width: 50%;
    padding: 40px;
    font-size: 2rem;
  }
}
</style>