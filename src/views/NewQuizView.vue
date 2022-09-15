<template>
  <Slogan>Create your own quiz!</Slogan>
  <CreateQuizForm v-if="loaded">
    <CategorySection :categories="categories" />
    <DifficultySection />
    <QuestionAmountSection />
    <FormSubmitButton />
  </CreateQuizForm>
  <LoadingSpinner v-else />
</template>

<script>
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import CreateQuizForm from "@/components/NewQuiz/CreateQuizForm.vue";
import CategorySection from "@/components/NewQuiz/sections/CategorySection.vue";
import DifficultySection from "@/components/NewQuiz/sections/DifficultySection.vue";
import QuestionAmountSection from "@/components/NewQuiz/sections/QuestionAmountSection.vue";
import Slogan from "@/components/NewQuiz/Slogan.vue";
import FormSubmitButton from "../components/NewQuiz/form/FormSubmitButton.vue";

export default {
  data() {
    return {
      loaded: false,
      categories: [],
    };
  },
  async created() {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    this.categories = data.trivia_categories;
    this.loaded = true;
  },
  methods: {},
  components: {
    LoadingSpinner,
    CreateQuizForm,
    CategorySection,
    DifficultySection,
    QuestionAmountSection,
    Slogan,
    FormSubmitButton,
  },
};
</script>
