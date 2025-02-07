<template>
    <section id="about-us">
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

          <div
                class="flex flex-column text-center gap-8 mt-8 w-full"
                id="achievements-box"
            >
                <h2 class="font-bold text-grays-1 other:text-2xl xs:text-xl">
                    Reconocimientos de Cero Trade
                </h2>
                <div class="flex justify-center">
                <img :src="arrowPrev" alt="Arrow prev"
                class="w-10 cursor-pointer mr-4" @click="carouselPrev">
                <div class="flex other:w-5/12 xs:w-7/12
                space-x-8 align-center overflow-hidden">
                    <div
                        ref="inner"
                        class="flex flex-row space-x-8
                        align-center transition duration-700"
                        :style="innerStyles"
                    >
                    <div
                        id="card"
                        v-for="item in carousel"
                        :key="item.alt"
                        class="flex flex-col justify-center
                        items-center mb-8"
                    >
                        <img :src="item.src" :alt="item.alt" class="mb-4">
                        <div
                            class="bg-grays-3 p-4 text-sm w-56
                            rounded-md shadow-md -mt-16 align-center"
                        >
                            <p class="font-semibold mb-2 text-grays-2">{{ item.description }}</p>
                            <p class="font-semibold text-greens-4">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img :src="arrowNext" alt="Arrow next"
                class="w-10 cursor-pointer ml-2" @click="carouselNext">
            </div>
          </div>
        </section>
</template>
<script>

import {
  redirectToLink,
} from '@/utils/functions';

// images
import startupChile from '@/assets/images/companies/startupChile.svg';
import DFinity from '@/assets/images/companies/DFinity.svg';
import SUPExtention from '@/assets/images/companies/SUP-extention.svg';
import AUNA from '@/assets/images/companies/AUNA.svg';
import arrowPrev from '@/assets/icons/welcome/arrow-prev.svg';
import arrowNext from '@/assets/icons/welcome/arrow-next.svg';

// members
import Joaquin from '@/assets/images/team/joaquin.svg';
import Vale from '@/assets/images/team/vale.svg';

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
      ],
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
      arrowPrev,
      arrowNext,
      carousel: [
        {
          src: startupChile, alt: 'startupChile', description: '“Most innovative Startup”', name: 'Start-Up Chile',
        },
        {
          src: DFinity, alt: 'DFinity', description: '“Receptor de la DFINITY developer grant”', name: 'DFINITY',
        },
        {
          src: SUPExtention, alt: 'SUPExtention', description: '“Ganadores extensión SUP”', name: 'Start-Up Chile',
        },
        {
          src: AUNA, alt: 'AUNA', description: '“Tercer lugar torneo desarrollo de blockchain”', name: 'Open Challenge de AUNA',
        },
      ],
      innerStyles: {},
      transitioning: false,
      step: '',
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    redirectToLink,
    carouselNext() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.imagePaths.shift();
        this.imagePaths.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    carouselPrev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.imagePaths.pop();
        this.imagePaths.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth + 30;
      const totalCards = this.imagePaths.length;
      this.step = `${innerWidth / totalCards}px`;
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitionend', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>
