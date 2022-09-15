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
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 2rem;
}

/* Medium screen devices (800px and above) */
@media only screen and (min-width: 800px) {
  h3 {
    font-size: 3rem;
  }
}

/* Big screen devices (1150px and above) */
@media only screen and (min-width: 1150px) {
  h3 {
    font-size: 4rem;
  }
}
</style>