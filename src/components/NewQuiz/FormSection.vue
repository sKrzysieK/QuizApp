<template>
  <section><slot></slot></section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 800px) {
  section {
    width: 100%;
    margin-top: 15px;
  }
}

@media only screen and (min-width: 1150px) {
  section {
    width: 100%;
    margin-top: 15px;
  }
}

</style>