<template>
  <router-link to="/new-quiz"><button>start quiz</button></router-link>
</template>

<script>
export default {
  name: "StartQuizButton",
};
</script>

<style scoped>
button {
  width: 200px;
  aspect-ratio: 3/1;

  font-size: 1.5rem;
  color: var(--text-color);
  text-transform: capitalize;

  background: none;
  outline: none;

  border: 5px solid var(--text-color);
  transition: 0.3s ease-in;

  position: relative;
}

button:hover {
  cursor: pointer;
  border: 0px solid var(--text-color);
  transition: 0.3s ease-in;
  color: var(--complementary-color);
  font-size: 2rem;
}
</style>