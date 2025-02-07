<template>
    <section>
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
        </div>
        
        <div
            class="bg-background-gray flex flex-row mt-5 h-64 other:px-44 align-center md:!px-8"
            id="troubles-box"
        >
            <img :src=complex alt="Complex" id="complex-images" class="xs:w-1/2"/>
            <p class="other:px-12 text-center text-grays-1 md:!px-8">
                El camino a ser una marca verde es un proceso
                <span class="font-bold">extremadamente </span>
                <span class="text-greens-2 underline font-bold">complejo</span>,
                <span class="text-greens-2 underline font-bold">caro</span>
                <span class="font-bold"> y que puede tomar</span>
                <span class="text-greens-2 underline font-bold"> meses</span>.
            </p>
        </div>
        <div
            class="bg-background-gray flex flex-row mt-5 h-64 other:px-44 align-center md:!px-8"
            id="costumers-box"
        >
            <p class="other:px-12 px-4 text-center text-grays-1">
                Por eso en Cero Trade
                <span class="font-bold">hemos ideado un marketplace</span>
                a través de la cual puedes lograrlo
                <span class="font-bold">de una manera muy
                    <span class="text-greens-2 underline font-bold">simple</span>
                    y en cosa de
                    <span class="text-greens-2 underline font-bold">minutos</span>
                </span>
                .
            </p>
            <img
                :src=costumers
                alt="Costumers"
                id="costumers-image"
                class="relative other:mt-12 xs:w-1/2"
            />
        </div>
      </section>
</template>

<script>

// utils
import { redirectToLink } from '@/utils/functions';

// components
import WelcomeBox from '@/components/boxes/welcome-box.vue';

// images
import Complex from '@/assets/images/welcome/complex.svg';
import costumers from '@/assets/images/welcome/costumers.svg';
import wind from '@/assets/images/welcome/wind.svg';
import achievementsRightArrow from '@/assets/icons/welcome/achievements-right-arrow.svg';
import PC from '@/assets/images/welcome/pc.svg';
import buyIREC from '@/assets/images/welcome/buy-iREC.svg';
import redeemIREC from '@/assets/images/welcome/redeem-iREC.svg';
import sellIREC from '@/assets/images/welcome/sell-iREC.svg';

export default {
  data() {
    return {
      costumers,
      wind,
      achievementsRightArrow,
      pc: PC,
      buyIREC,
      redeemIREC,
      sellIREC,
      complex: Complex,
    };
  },
  components: {
    WelcomeBox,
  },
  methods: {
    redirect() {
      redirectToLink('https://h9hk1icgi92.typeform.com/to/KBvFGq8Y')
    },
  },
};
</script>
