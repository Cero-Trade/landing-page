<template>
    <nav
      id="navbar"
      class="bg-background-black font-inter h-8 fixed top-0 w-full px-8 py-8 flex z-50"
    >
      <div class="flex flex-row gap-8 place-items-center w-full justify-center">
        <img :src="CeroTradeLogo" alt="Logo" id="logo-home-navbar">
        <span class="text-grays-3 text-xs cursor-pointer" @click="redirectToHome">
          Inicio
        </span>

        <span class="text-grays-3 text-xs cursor-pointer" @click="redirectToAboutUs">
          Quiénes Somos
        </span>

        <span class="text-grays-3 text-xs cursor-pointer" @click="redirectToHowItWorks">
          Cómo Funciona
        </span>

        <span class="text-grays-3 text-xs cursor-pointer" @click="redirectToFAQ">
          Preguntas Frecuentes
        </span>

        <span class="text-grays-3 text-xs cursor-pointer" @click="redirectToContactUs">
          Contacto
        </span>

        <button
          class="text-xs bg-greens-1 rounded-sm flex hover:brightness-95 px-4
          flex-row py-2.5 font-medium items-center gap-1.5 cursor-pointer"
          id="home-navbar-btn"
          @click="redirectToLink(formLink)"
        >
          Comencemos
          <img :src="arrowRight" alt="arrow-right icon">
        </button>
      </div>
    </nav>
  </template>

<script>
import {
  redirectToHowItWorks,
  redirectToContactUs,
  redirectToHome,
  redirectToAboutUs,
  redirectToFAQ,
  redirectToLink,
} from '@/utils/functions';

// logos
import navbarLogo from '@/assets/logos/logo-home-navbar.svg';

// icons
import arrowRight from '@/assets/icons/welcome/navbar-right-arrow.svg';

export default {
  data() {
    return {
      drawer: false,
      CeroTradeLogo: navbarLogo,
      arrowRight,
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
    };
  },
  methods: {
    redirectToHowItWorks,
    redirectToContactUs,
    redirectToHome,
    redirectToAboutUs,
    redirectToFAQ,
    redirectToLink,
  },
};
</script>
