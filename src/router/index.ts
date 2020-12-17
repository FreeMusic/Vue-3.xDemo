import {createRouter, createWebHashHistory} from "vue-router";
import reactiveTryApp from "@/components/reactiveTryApp.vue";
import TimeApp from "@/components/TimeApp.vue";
import AppRoot from "@/AppRoot.vue";
import HeroShow from "@/components/HeroShow.vue";


const routes: Array<any> = [
    {
        path:"/reactiveTryApp",
        name:"reactiveTryApp",
        component:reactiveTryApp
    },
    {
        path:"/TimeApp",
        name:"TimeApp",
        component:TimeApp
    },
    {
        path:"/AppRoot",
        name:"AppRoot",
        component: AppRoot
    },
    {
        path: "/Hero",
        name: "Hero",
        component: HeroShow
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router;
