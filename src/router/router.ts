import Vue from "vue";
import VueRouter from "vue-router";
import SearchMeetings from "../components/Search.vue";
import AddMeeting from "../components/Add.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "search",
      component: SearchMeetings,
    },
    {
      path: "/add",
      name: "add",
      component: AddMeeting,
    },
  ],
});
