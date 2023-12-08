import { createRouter, createWebHashHistory } from "vue-router";
import PokerDashboard from "../views/PokerDashboard.vue";
import LandingPage from "../views/LandingPage.vue";
import NewStoryModal from "../components/Modals/NewStoryModal.vue";
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
    path: "/newstorymodal",
    name: "NewStoryModal",
    component: NewStoryModal,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
