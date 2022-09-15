<template>
  <button class="answer_card"><slot></slot></button>
</template>

<script>
export default {
  name: "AnswerCard",
};
</script>

<style scoped>
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
  .answer_card {
    width: 100%;
    max-height: 100%;
    font-size: 1.5rem;
    aspect-ratio: 1/1;
    justify-self: center;
  }
}

@media only screen and (min-width: 800px) {
  .answer_card {
    width: 20%;
    aspect-ratio: 2/3;
    max-height: 100%;
    font-size: 1.8rem;
  }
}

@media only screen and (min-width: 1150px) {
  .answer_card {
    width: 20%;
    aspect-ratio: 1/1.25;
    max-height: 100%;
    font-size: 2rem;
  }
}
</style>