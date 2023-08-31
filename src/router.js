import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transactions from "./pages/transactions.vue";
import TransactionDetails from "./pages/transaction-details.vue";
const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/transactions",
    name: "transactions-route",
    component: Transactions,
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: TransactionDetails,
  },
  {
    path: "/ts",
    redirect: "/transactions",
  },
  {
    path: "/:pathMatch(.*)",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
