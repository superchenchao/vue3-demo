import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import {routes} from "./config";

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from) => {
    // to.path = '/login'
    return true
})
export default router