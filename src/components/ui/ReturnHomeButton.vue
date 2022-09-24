<template>
  <router-link to="/"><button>return to home page</button></router-link>
</template>

<script>
export default {
  name: "ReturnHomeButton",
};
</script>

<style scoped>
button {
  width: 300px;
  aspect-ratio: 3/1;

  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-background-color);
  text-transform: capitalize;

  background: none;
  background-color: var(--complementary-color);
  border-radius: 20px;
  outline: none;

  transition: 0.3s ease-in;

  position: relative;
}

button:hover {
  cursor: pointer;
  transition: 0.3s ease-in;
  background-color: var(--highlight-color);
  scale: 1.1;
}
</style>