import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";

export default new VueRouter({
  routes: [
    {
      path: 'hello',
      component: HelloWorld
    }
  ]
});