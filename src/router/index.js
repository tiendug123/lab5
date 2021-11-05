import { createWebHistory, createRouter } from "vue-router";
import store from "../store";
const routes = [{
    part: "/login",
    name: "login",
    component: () => import("../view/UserLogin.vue"),
},
{
    path: "/profile",
    name: "profile",
    component: () => import("../view/contactEdit")
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const publicPages = ["/login", "/register"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.getters.userLoggedIn;
    if (authRequired && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});
export default router;