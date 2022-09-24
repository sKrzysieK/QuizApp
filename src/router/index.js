import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewQuizView from '../views/NewQuizView.vue'
import QuizView from '../views/QuizView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new-quiz',
    name: 'new-quiz',
    // component: () => import('../views/NewQuizView.vue')
    component: NewQuizView
  },
  {
    path: '/quiz',
    name: 'quiz',
    // component: () => import('../views/QuizView.vue'),
    component: QuizView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    // component: () => import('../views/NotFound.vue')
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
