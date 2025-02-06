<template>
  <div>
    <div
      class="bg-background-black font-inter h-8 fixed top-0 w-full px-8 py-8 flex z-50 align-center"
    >
      <div class="flex items-center flex-grow">
        <img
          :src="logo"
          alt="Cero Trade"
          style="cursor: pointer"
          @click="redirectToHome"
        />
      </div>

      <div class="flex items-center ml-auto">
        <font-awesome-icon
          :icon="bars"
          :style="{color: 'white'}"
          @click="toggleDrawer"
          class="size-5 hover:bg-gray-900 transition-color duration-300"
        />
      </div>
    </div>

      <!-- Cajón (drawer) -->
    <div class="drawer-bg">
        <div class="bg-background-black text-white fixed left-0 w-64 h-full
        transition-all duration-1000 overflow-hidden pt-28 font-inter z-50"
        :class="[showDrawer ? 'max-w-lg' : 'max-w-0']"
        >
            <h3
              v-for="(item, i) in items" :ke="i"
              class="mb-4 text-xl text-grays-4 pl-6"
              style="cursor: pointer"
              @click="toggleAndRedirect(item.action)"
            >{{ item.name }}</h3>
        </div>
    </div>
    </div>
  </template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import LogoCeroTrade from '@/assets/logos/logo-home-navbar.svg';

export default {
  data() {
    return {
      bars: faBars,
      showDrawer: false,
      logo: LogoCeroTrade,
      items: [
        {
          name: "Inicio",
          action: () => document.documentElement.scrollTop = 0,
        },
        {
          name: "Cómo Funciona",
          action: () => document.getElementById('how-to-works').scrollIntoView(),
        },
        {
          name: "Quiénes Somos",
          action: () => document.getElementById('about-us').scrollIntoView(),
        },
        {
          name: "Lista de espera",
          action: () => document.getElementById('waiting-list').scrollIntoView(),
        },
        {
          name: "Preguntas Frecuentes",
          action: () => document.getElementById('faq').scrollIntoView(),
        },
        {
          name: "Contacto",
          action: () => document.getElementById('contact-us').scrollIntoView(),
        },
      ]
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    redirectToHome() {
      document.documentElement.scrollTop = 0
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    toggleAndRedirect(link) {
      this.toggleDrawer();
      link();
    },
  },
};
</script>
