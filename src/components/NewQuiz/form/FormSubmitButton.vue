<template>
    <input type="submit" value="DONE" id="create-quiz_btn" />
</template>

<script>
export default {
  name: "FormSubmitButton",
};
</script>

<style scoped>
#create-quiz_btn {
  width: 20%;
  aspect-ratio: 5/2;
  background-color: var(--complementary-color);
  color: var(--primary-background-color);
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  transition: 0.3s ease-in-out;
}

#create-quiz_btn:hover {
  cursor: pointer;
  font-weight: bold;
  background-color: var(--highlight-color);
  transition: 0.3s ease-in-out;
}
</style>