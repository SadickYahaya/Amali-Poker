import { createRouter, createWebHashHistory } from "vue-router";
import PokerDashboard from "../views/PokerDashboard.vue";
import LandingPage from "../views/LandingPage.vue";
import CardsView from "../components/CardsView.vue";
import TableComponent from "../views/TableComponent.vue";
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
  {
    path: "/recentsession",
    name: "RecentSession",
    component: TableComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
