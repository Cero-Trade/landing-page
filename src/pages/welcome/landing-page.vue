<template>
    <div>
        <div id="bottom-box" class="bg-background-gray h-28 font-inter
        pt-6 flex justify-center">
            <p class="font-base text-grays-2 text-center max-w-96 xs:px-8">
                Tranza i-RECS
                <span class="font-bold">
                    de la manera más
                    <span class="text-greens-2 underline">simple</span>
                    ,
                    <span class="text-greens-2 underline">segura</span>
                    y
                    <span class="text-greens-2 underline">rápida</span>
                </span>
                en una
                <span class="font-bold">plataforma
                    <span class="text-greens-2 underline">intuitiva</span>
                    y
                    <span class="text-greens-2 underline">navegable</span>
                </span>
                .
            </p>
        </div>
        <div
            class="flex flex-row justify-center other:gap-8 mt-8 mb-8"
            id="how-it-works-box"
        >
            <WelcomeBox
            title="Para generadoras"
            subtitle="Compense la huella de carbono de sus clientes en tan solo unos clics"
            description='<p class="max-w-[430px]">
                En Cero Trade, <span class="font-bold">redima IRECs de manera transparente</span> y
                contribuya al desarrollo sostenible.Nuestro servicio simplificado
                le permite <span class="font-bold">gestionar, trazar y visibilizar</span>
                todas sus transacciones en el mismo lugar.
            </p>'
            buttonText="Redime i-RECS"
            @click="redirect"
            >
            </WelcomeBox>
            <img
                :src="redeemIREC"
                alt="For generators"
                id="for-generators"
                class="xs:w-1/2"
            />
        </div>
        <div class="flex flex-row justify-center other:gap-8 mb-8">
            <WelcomeBox
            subtitle="Maximice el retorno de su energía verde"
            description='<p class="max-w-[410px]">
                En el Marketplace de Cero Trade
                <span class="font-bold">puede ofrecer sus i-RECs</span>
                a miles de clientes en tiempo real, automatizando el proceso de venta
                y accediendo a nuevos consumidores.
            </p>'
            buttonText="Vende i-RECS"
            @click="redirect"
            >
            </WelcomeBox>
            <img
                :src="sellIREC"
                alt="For generators"
                id="for-generators"
                class="xs:w-1/2"
            />
        </div>
        <div class="flex flex-row justify-center other:gap-8">
            <img
                :src="buyIREC"
                alt="For generators"
                id="for-generators"
                class="xs:w-1/2"
            />
            <WelcomeBox
            title="Para empresas"
            subtitle="Conecte su negocio con un mercado diverso de atributos ambientales"
            description='<p class="max-w-[450px]">
                <span class="font-bold">Descubra y adquiera certificados</span>
                de manera sencilla mediante Cero Trade, expandiendo su cartera y
                llegando a un mayor número de clientes interesados en energías limpias.
            </p>'
            buttonText="Compra i-RECS"
            @click="redirect"
            >
            </WelcomeBox>
        </div>
        <div class="font-inter">
            <div class="flex flex-column align-center mt-7">
                <div class="achievements-image">
                    <img class="relative -mb-2 z-0" :src="pc" alt="Welcome pc" id="welcome-pc">
                </div>
                <div
                    class="bg-grays-3 w-full flex flex-row py-8 other:pl-28
                    other:gap-8 other:pr-10 xs:gap-2 xs:p-4
                    place-items-center justify-center"
                >
                    <div class="other:mr-2">
                        <div id="ach-1" class="gap-5">
                            <h2
                                class="font-semibold other:text-2xl xs:text-xl"
                                style="text-shadow: 0px 1px 2px #0000004D;"
                            >
                                A partir de solo <span class="text-greens-3">USD$1</span>
                            </h2>
                            <p class="text-sm text-blacks-1 xs:text-xs">
                                Podrás certificar tu consumo de energía como renovable
                            </p>
                        </div>
                    </div>
                    <img
                        :src="achievementsRightArrow"
                        alt="Arrow right"
                        id="arrow-right"
                        class="xs:size-1/12"
                    />
                    <p class="text-grays-1 xs:text-xs other:text-sm other:px-20 text-wrap">
                        Y
                        <span class="text-greens-2 underline font-medium">
                            acceder a certificaciones
                        </span>
                        que tienen las mejores empresas del mundo el día de hoy
                    </p>
                </div>
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
                        v-for="item in imagePaths"
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
        </div>
    </div>
</template>

<script>

// utils
import { redirectToLink } from '@/utils/functions';

// components
import WelcomeBox from '@/components/boxes/welcome-box.vue';

// images
import startupChile from '@/assets/images/companies/startupChile.svg';
import DFinity from '@/assets/images/companies/DFinity.svg';
import SUPExtention from '@/assets/images/companies/SUP-extention.svg';
import AUNA from '@/assets/images/companies/AUNA.svg';
import costumers from '@/assets/images/welcome/costumers.svg';
import wind from '@/assets/images/welcome/wind.svg';
import achievementsRightArrow from '@/assets/icons/welcome/achievements-right-arrow.svg';
import PC from '@/assets/images/welcome/pc.svg';
import arrowRight from '@/assets/icons/welcome/know-us-right-arrow.svg';
import arrowPrev from '@/assets/icons/welcome/arrow-prev.svg';
import arrowNext from '@/assets/icons/welcome/arrow-next.svg';
import buyIREC from '@/assets/images/welcome/buy-iREC.svg';
import redeemIREC from '@/assets/images/welcome/redeem-iREC.svg';
import sellIREC from '@/assets/images/welcome/sell-iREC.svg';

export default {
  data() {
    return {
      imagePaths: [
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
      costumers,
      wind,
      achievementsRightArrow,
      pc: PC,
      knowUsRightArrow: arrowRight,
      buyIREC,
      redeemIREC,
      sellIREC,
      arrowPrev,
      arrowNext,
      innerStyles: {},
      step: '',
      transitioning: false,
    };
  },
  components: {
    WelcomeBox,
  },
  methods: {
    redirect() {
      redirectToLink('https://h9hk1icgi92.typeform.com/to/KBvFGq8Y')
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth + 30;
      const totalCards = this.imagePaths.length;
      this.step = `${innerWidth / totalCards}px`;
    },
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
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
};
</script>
