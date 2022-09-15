<template>
  <select name="category" id="categories">
    <option
      v-for="category in categories"
      :key="category.id"
      :value="category.id"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CategorySelect",
  props: {
    categories: Array,
  },
};
</script>


<style scoped>
#categories {
  height: 50px;
  background-color: var(--text-color);
  color: var(--primary-background-color);
  font-weight: bold;
}
</style>