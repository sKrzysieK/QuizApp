<template>
  <p class="label"><slot></slot></p>
</template>

<script>
export default {
  name: "FormLabel",
};
</script>

<style scoped>
.label {
  font-size: 1.2rem;
  padding: 10px;
  width: 75%;
  /* height: 30px; */
  color: var(--complementary-color);
  border: none;
  border-top: 2px solid var(--complementary-color);
  border-bottom: 2px solid var(--complementary-color);
  position: relative;
  text-align: center;
}

@media only screen and (min-width: 500px) {
  .label {
    font-size: 1.4rem;
  }
}

@media only screen and (min-width: 500px) {
  .label {
    font-size: 1.4rem;
  }
}

/* Medium screen devices (800px and above) */
@media only screen and (min-width: 800px) {
  .label {
    font-size: 1.5rem;
    padding: 10px;
  }
}

@media only screen and (min-width: 1150px) {
  .label {
    font-size: 1.5rem;
    padding: 10px;
  }

  .label::before {
    content: "";
    width: 16px;
    aspect-ratio: 1/1;
    background-color: var(--complementary-color);
    rotate: 45deg;
    position: absolute;
    top: calc(50% - 8px);
    left: -30px;
  }

  .label::after {
    content: "";
    width: 16px;
    aspect-ratio: 1/1;
    background-color: var(--complementary-color);
    rotate: 45deg;
    position: absolute;
    top: calc(50% - 8px);
    right: -30px;
  }
}
</style>