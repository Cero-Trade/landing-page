import { createRouter, createWebHistory } from 'vue-router';
import { APP_NAMES } from '@/plugins/dictionary';
import { nextTick } from 'vue';

// route imports
import AlfaMVP from '@/pages/alfa.vue';
import LandingPageTemplate from '@/layouts/landing-page.vue';

const DEFAULT_TITLE = APP_NAMES.capitalize;

const routes = [
  {
    path: '/',
    name: 'BaseRoute',
    component: LandingPageTemplate,
    children: [
    ],
  },
  {
    path: '/alfa',
    name: 'AlfaMVP',
    component: AlfaMVP,
    meta: { head: `Alfa MVP - ${DEFAULT_TITLE}` },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    if (to.meta.head) document.title = to.meta.head.toString();
    else document.title = DEFAULT_TITLE;
  });
});

export default router;
