import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import CardsView from "../components/CardsView.vue";
import VotingSession from "../views/VotingSession.vue";
const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },

  {
    path: "/sessionName",
    name: "SessionName",
    component: CardsView,
  },
  {
    path: "/votingsession",
    name: "VotingSession",
    component: VotingSession,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
