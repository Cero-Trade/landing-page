<template>
    <div>
        <div id="team-title" class="flex flex-column text-center gap-8 mt-8 font-inter">
            <h2 class="font-bold text-grays-1 text-2xl">Cero Team</h2>
            <div class="bg-grays-3">
                <p class="text-grays-2 text-sm other:px-60 xs:px-4 py-10">
                  Nuestra misión es lograr la reducción y compensación
                  de las emisiones de carbono de las
                  empresas productoras y exportadoras de Chile y Latam, entregando un valor
                  común como el mercado más limpio del mundo.
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-center flex-wrap p-8 gap-8 gap-x-2 xs:gap-x-16">
             <div
              v-for="item in imagePaths"
              class="flex flex-column align-center w-1/3"
              :key="item.alt"
            >
                <img
                  :key="item.alt"
                  :src="item.src"
                  :alt="item.alt"
                  class="rounded-md"
                >
                <div
                  class="bg-background-gray rounded-md gap-4 p-5 other:w-7/12"
                  style="box-shadow: 0px 5.56px 11.13px 0px #ABBED166;"
                >
                    <p class="text-greens-4 font-semibold mb-2 text-medium text-center">
                      {{item.name}}
                    </p>
                    <p class="text-grays-2 font-medium text-center text-sm">{{item.description}}</p>
                </div>
            </div>
          </div>
          <div class="flex justify-center mb-10">
            <button
              @click="redirectToLink(formLink)"
              class="bg-greens-1 w-32 text-xs py-2 px-2 cursor-pointer">
              Únete al Cero Team
            </button>
          </div>
        <ContactUs></ContactUs>
    </div>
</template>
<script>

import {
  redirectToLink,
} from '@/utils/functions';

// components
import ContactUs from '@/components/boxes/contact-us.vue';

// images
import Bea from '@/assets/images/team/bea.svg';
import Joaquin from '@/assets/images/team/joaquin.svg';
import Vale from '@/assets/images/team/vale.svg';
import Fernanda from '@/assets/images/team/fernanda.svg';

export default {
  data() {
    return {
      imagePaths: [
        {
          src: Vale, alt: 'Vale', description: 'Valentina es Ingeniera en Computación de la Universidad Católica, tiene un Major en Diseño y ha liderado proyectos basados en tecnologías descentralizadas como Tricket y Open Web Sandbox en el ecosistema blockchain de Near. Vale es apasionada por la tecnología, el medio ambiente y los deportes, fanática de escalar, surfear y el fútbol.', name: 'Valentina De Vidts, CTO y Cofundadora',
        },
        {
          src: Joaquin, alt: 'Joaquin', description: 'Joaquín es Ingeniero civil Industrial de la Universidad del Desarrollo, tiene un minor en Derecho de la empresa y una certificación de innovación y emprendimiento de Stanford. Joaquin ha liderado otras Startups en el pasado como LobbyControl y actualmente es mentor de emprendimiento en UDD y USACH.', name: 'Joaquín Gonzalez, CEO y Cofundador',
        },
        {
          src: Bea, alt: 'Bea', description: 'Beatriz está cursando su último año como estudiante de Ingeniería en computación de la UC. Ha sido ayudante en muchos cursos de computación, fue parte de la comisión de sustentabilidad del Centro de Alumnos de Ingeniería en la UC y actualmente es presidenta del Capítulo de Ciencias de la Computación.', name: 'Beatriz Errázuriz, Desarrolladora',
        },
        {
          src: Fernanda, alt: 'Fernanda', description: 'Fernanda es estudiante de último año de Periodismo y licenciada en Comunicación Social de la UDP. Hizo su práctica como Community Mannager en CNN Chile y trabajó en el área de reacción de CHV Noticias. Tiene un gran interés por las letras y los idiomas, y actualmente cursa el Diplomado en Traducción Literaria de la UC. ', name: 'Fernanda Navarrete, Community Manager',
        },
      ],
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
    };
  },
  components: {
    ContactUs,
  },
  methods: {
    redirectToLink,
  },
};
</script>
