import { createRouter, createWebHashHistory } from "vue-router";
import PokerDashboard from "../views/PokerDashboard.vue";
import LandingPage from "../views/LandingPage.vue";
import CardsView from "../components/CardsView.vue";
const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: PokerDashboard,
  },
  {
    path: "/sessionName",
    name: "SessionName",
    component: CardsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
