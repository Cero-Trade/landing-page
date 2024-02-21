<template>
    <v-footer
      id="footer"
      class="font-inter bg-background-black w-full h-full !p-0"
    >
      <div id="footer__wrapper" class="flex flex-row bg-background-black w-full p-8 gap-40">
        <div class="flex flex-column">
          <div class="flex flex-row gap-8 mb-4">
            <img :src="ceroTradeLogo" alt="Logo" id="logo-footer"/>
            <img :src="startUpChile" alt="Logo" id="startupchile"/>
          </div>
          <div class="space-y-1 mb-5">
            <p class="text-xs text-grays-3">Copyright © 2024 Cero Trade.</p>
            <p class="text-xs text-grays-3">Todos los derechos reservados</p>
          </div>
          <div class="social-links">
            <div
              v-for="item in socialLinks"
              class="rounded-full bg-grays-5 w-5 h-5 justify-center
              items-center cursor-pointer align-middle flex"
              @click="redirectToLink(item.link)"
              :key="item.alt"
            >
              <img :src="item.icon" :alt="item.alt"/>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-32">
          <div class="flex flex-column gap-2">
            <h3 class="text-sm text-white font-bold">Nosotros</h3>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToAboutUs">
              Quiénes Somos
            </p>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToMission">
              Misión
            </p>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToAchievements">
              Reconocimientos
            </p>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToLink(formLink)"
            >
              Únete al Cero Team
            </p>
          </div>
          <div class="flex flex-column gap-2">
            <h3 class="text-sm text-white font-bold"> Asistencia</h3>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToFAQ">
              Preguntas Frecuentes
            </p>
            <p
              class="text-xs text-grays-3 cursor-pointer"
              @click="redirectToContactUs">
              Contáctanos
            </p>
          </div>
          <div class="flex flex-column gap-2">
            <h3 class="text-sm text-white font-bold">Subscríbete</h3>
            <div class="input-container">
              <input
                type="text"
                placeholder="Escribe tu correo electrónico"
                class="input-text text-xs text-grays-4 bg-grays-5
                rounded-sm p-1.5 pr-6 inline-block focus:caret-grays-6"
              />
              <img :src="send" alt="send" id="send" class="cursor-pointer relative -mt-5 ml-44"/>
            </div>
          </div>
        </div>
      </div>
    </v-footer>
  </template>

<script>
// utils
import {
  redirectToLink,
  redirectToAboutUs,
  redirectToMission,
  redirectToAchievements,
  redirectToFAQ,
  redirectToContactUs,
} from '@/utils/functions';

// images
import Linkedin from '@/assets/logos/linkedin.svg';
import logoFooter from '@/assets/logos/logo-footer.svg';
import startUpChile from '@/assets/logos/startupchile.svg';

// icons
import Send from '@/assets/icons/send.svg';

export default {
  data() {
    return {
      socialLinks: [
        {
          icon: Linkedin,
          alt: 'linkedin icon',
          link: 'https://www.linkedin.com/company/cero-trade/',
        },
      ],
      ceroTradeLogo: logoFooter,
      startUpChile,
      send: Send,
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
    };
  },
  methods: {
    redirectToLink,
    redirectToAboutUs,
    redirectToMission,
    redirectToAchievements,
    redirectToFAQ,
    redirectToContactUs,
  },
};
</script>
