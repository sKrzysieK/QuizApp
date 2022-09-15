<template>
  <h3>Create your own quiz!</h3>
  <create-quiz-form v-if="loaded">
    <section>
      <p class="label">Select a category:</p>
      <select name="category" id="categories">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </section>
    <section>
      <p class="label">Choose your difficulty level:</p>
      <div id="difficulty_container">
        <label class="difficulty"
          ><input
            type="radio"
            name="difficulty"
            id="easy"
            value="easy"
          />Easy</label
        >
        <label class="difficulty"
          ><input
            type="radio"
            name="difficulty"
            id="medium"
            value="medium"
            checked
          />Medium</label
        >
        <label class="difficulty"
          ><input
            type="radio"
            name="difficulty"
            id="hard"
            value="hard"
          />Hard</label
        >
      </div>
    </section>
    <section>
      <p class="label">How many questions do you want?</p>
      <div id="questions_amount">
        <input
          type="range"
          name="questions_amount"
          id="questions_amount_input"
          min="3"
          max="30"
          step="1"
          v-model="questions_quantity"
        />
        <p id="questions_amount_counter">{{ questions_quantity }}</p>
      </div>
    </section>
    <input type="submit" value="DONE" id="create-quiz_btn" />
  </create-quiz-form>
  <loading-spinner v-else />
</template>

<script>
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import CreateQuizForm from "@/components/NewQuiz/CreateQuizForm.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loaded: false,
      categories: [],
      questions_quantity: 5,
    };
  },
  async created() {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    this.categories = data.trivia_categories;
    this.loaded = true;
  },
  methods: {
    ...mapActions(["startQuiz"]),
    async submitForm(e) {
      await this.startQuiz(e);
      this.$router.push("/quiz");
    },
  },
  components: {
    LoadingSpinner,
    CreateQuizForm,
  },
};
</script>

<style scoped>
h3 {
  width: 100%;
  text-align: center;
  margin: 0;
  font-size: 2rem;
}

form {
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 3/2;

  border: 5px solid var(--complementary-color);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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

#categories {
  height: 50px;
  background-color: var(--text-color);
  color: var(--primary-background-color);
  font-weight: bold;
}

.difficulty {
  display: inline;
  margin: 10px;
}

#questions_amount {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#questions_amount * {
  margin: 10px 0px;
  padding: 0;
}

#questions_amount_counter {
  width: 50px;
  aspect-ratio: 1/1;
  font-size: 2rem;
  border: 3px solid var(--text-color);
  border-radius: 50%;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

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

@media only screen and (min-width: 500px) {
  form {
    width: 60%;
  }

  .label {
    font-size: 1.4rem;
  }
}

/* Medium screen devices (800px and above) */
@media only screen and (min-width: 800px) {
  h3 {
    font-size: 3rem;
  }
  form {
    width: 40%;
    aspect-ratio: 3/2;
  }

  section {
    width: 100%;
    margin-top: 15px;
  }

  .label {
    font-size: 1.5rem;
    padding: 10px;
    /* height: 30px; */
  }

  #questions_amount_counter {
    width: 50px;
    aspect-ratio: 1/1;
    font-size: 2rem;
  }
}

/* Big screen devices (1150px and above) */
@media only screen and (min-width: 1150px) {
  h3 {
    font-size: 4rem;
  }
  form {
    width: 40%;
    aspect-ratio: 3/2;
  }

  section {
    width: 100%;
    margin-top: 15px;
  }

  .label {
    font-size: 1.5rem;
    /* height: 30px; */
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

  #questions_amount_counter {
    width: 50px;
    aspect-ratio: 1/1;
    font-size: 2rem;
  }
}
</style>