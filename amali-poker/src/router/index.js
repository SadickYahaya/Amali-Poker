import { createRouter, createWebHashHistory } from "vue-router";
import PokerDashboard from "../views/PokerDashboard.vue";
import LandingPage from "../views/LandingPage.vue";
// import CardsView from "../components/CardsView.vue";
import TableComponent from "../components/TableComponent";
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
    component: TableComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
