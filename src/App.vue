<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      name: "Quiz App",
    };
  },
  components: {},
};
</script>

<style>
:root {
  --primary-background-color: #25283d;
  --secondary-background-color: #17bebb;
  --highlight-color: #ff007f;
  --text-color: #fdfffc;
  --complementary-color: #dbbadd;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

h1 {
  font-size: 6rem;
  color: var(--highlight-color);
  padding: 0;
  margin: 0;
}

h3 {
  font-size: 4rem;
  color: var(--highlight-color);
}

#app {
  width: 100vw;
  height: 100vh;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: var(--primary-background-color);
  color: var(--text-color);

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
