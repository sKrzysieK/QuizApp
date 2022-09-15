<template>
  <h1>{{ getAppName }}</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Slogan",
  computed: {
    ...mapGetters(["getAppName"]),
  },
};
</script>

<style scoped>
h1 {
  background-color: var(--secondary-background-color);
  padding: 0;
  width: 500px;
  aspect-ratio: 5/1;
  text-align: center;
  border-radius: 500px 500px 500px 500px;
  pointer-events: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  h1 {
    width: 100%;
    border-radius: 0%;
    font-size: 4rem;
  }
}
</style>