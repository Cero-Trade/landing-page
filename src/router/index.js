import { createRouter, createWebHistory } from 'vue-router';
import { APP_NAMES } from '@/plugins/dictionary';
import { nextTick } from 'vue';

// route imports
import LandingTemplate from '@/layouts/landing-layout.vue';
import AlfaMVP from '@/pages/alfa.vue';
import WaitingList from '@/pages/waiting-list.vue';
import LandingPage from '@/pages/welcome/landing-page.vue';

const DEFAULT_TITLE = APP_NAMES.capitalize;

const routes = [
  {
    path: '/',
    name: 'BaseRoute',
    component: LandingTemplate,
    children: [
      {
        path: '',
        name: 'LandingPage',
        component: LandingPage,
        meta: { head: `Landing Page - ${DEFAULT_TITLE}` },
      },
      {
        path: '/waiting-list',
        name: 'WaitingList',
        component: WaitingList,
        meta: { head: `Lista de espera - ${DEFAULT_TITLE}` },
      },
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
