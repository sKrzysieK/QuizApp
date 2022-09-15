<template>
  <label class="difficulty"
    ><input
      type="radio"
      name="difficulty"
      :id="radioValue"
      :value="radioValue"
      :checked="checked"
    />{{ formatedRadioValue }}
  </label>
</template>

<script>
export default {
  name: "DifficultyRadioInput",
  props: {
    radioValue: { type: String, required: true },
    checked: { type: Boolean, required: false },
  },
  computed: {
    formatedRadioValue() {
      return this.radioValue[0].toUpperCase() + this.radioValue.slice(1);
    },
  },
};
</script>


<style scoped>
.difficulty {
  display: inline;
  margin: 10px;
}
</style>