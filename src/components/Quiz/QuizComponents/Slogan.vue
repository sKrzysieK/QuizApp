<template>
  <h3><slot></slot></h3>
</template>

<script>
export default {
  name: "Slogan",
};
</script>

<style scoped>
h3 {
  margin: 0;
  font-size: 2.5rem;
}

@media only screen and (min-width: 800px) {
  h3 {
    font-size: 4rem;
  }
}

@media only screen and (min-width: 1150px) {
  h3 {
    font-size: 4rem;
  }
}
</style>