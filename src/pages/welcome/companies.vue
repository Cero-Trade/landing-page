<template>
    <div class="font-inter">
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
        <div>
            <div class="flex flex-column text-center gap-8 other:mt-24 xs:mt-5">
                <h2 class="font-bold text-grays-1 text-2xl">Cómo funciona nuestro marketplace</h2>
                <p class="text-grays-2 other:px-72 xs:px-4 md:!px-4">
                    Conectamos a Generadoras de energía limpia con empresas que buscan
                    compensar su consumo energético y reducir su huella de CO2
                </p>
            </div>
            <div
                class="flex xs:flex-wrap md:!flex-wrap other:justify-stretch xs:justify-center
                md:!justify-center
                align-center w-full my-12 other:px-44 xs:px-4 md:!px-24 md:!gap-3
                 other:gap-8 xs:gap-3"
            >
                <div
                    class="p-5 flex flex-column align-center text-center xs:w-36"
                    style="box-shadow: 0px 2px 3px 0px #ABBED14D;"
                >
                    <img :src=energy alt="Energy" id="energy-image"/>
                    <h3 class="text-xl text-grays-1 font-bold mb-2">Calcula tu consumo</h3>
                    <p class="text-xs text-grays-2">
                        Nos envías tu consumo anual de energía eléctrica
                    </p>
                </div>
                <img :src="rightArrow" alt="Right Arrow" id="right-arrow" />
                <div
                    class="p-5 flex flex-column align-center text-center xs:w-36"
                    style="box-shadow: 0px 2px 3px 0px #ABBED14D;"
                >
                    <img :src=balance alt="Balance" id="balance-image" />
                    <h3 class="text-xl text-grays-1 font-bold mb-2">
                        Compensa tu huella de carbono
                    </h3>
                    <p class="text-xs text-grays-2">
                        Te ofrecemos la cantidad de i-REC equivalentes a tu consumo
                    </p>
                </div>
                <img :src="rightArrow" alt="Right Arrow" id="right-arrow" />
                <div
                    class="p-5 flex flex-column align-center text-center xs:w-36"
                    style="box-shadow: 0px 2px 3px 0px #ABBED14D;"
                >
                    <img :src=medal alt="Medal" id="medal-image" />
                    <h3 class="text-xl text-grays-1 font-bold mb-2">Tramita tu certificación</h3>
                    <p class="text-xs text-grays-2">
                        Obtienes la certificación de consumo eléctrico 100% renovable
                    </p>
                </div>
            </div>
            <div class="justify-center flex flex-column align-center">
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
                        :src="AchievementsrightArrow"
                        alt="Arrow right"
                        id="arrow-right"
                        class="xs:size-1/12"
                    />
                    <p class="text-grays-1 xs:text-xs other:text-sm
                    other:px-20 text-wrap ">
                        Y
                        <span class="text-greens-2 underline font-medium">
                            acceder a certificaciones
                        </span>
                        que tienen las mejores empresas del mundo el día de hoy
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div class="flex flex-row justify-center align-center
        other:px-36 xs:px-2 xs:gap-2 gap-2 mt-8 mb-4 md:!px-4">
            <img :src=stats alt="Stats" id="stats-image" class="xs:w-5/12"/>
            <div class="other:px-16 text-grays-1">
                <h3 class="text-grays-1 other:text-xl xs:text-lg other:mb-8 xs:mb-2 font-bold">
                    Registro 100% transparente
                </h3>
                <p class="text-grays-2 other:text-sm xs:text-xs max-w-[380px]">
                    Todas sus transacciones adquiridas que le certifiquen como marca verde quedarán
                    <span class="font-bold">disponibles para ser verificadas</span>
                    por sus clientes
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-center align-center
        other:px-36 xs:px-2 xs:gap-2 gap-2 mt-8 mb-4 md:!px-4">
            <img :src=blockchain alt="Blockchain" id="blockchain-image" class="xs:w-5/12"/>
            <div class="other:px-16 text-grays-1">
                <h3 class="text-grays-1 other:text-xl xs:text-lg other:mb-8 xs:mb-2 font-bold">
                    Un proceso completamente seguro
                </h3>
                <p class="text-grays-2 other:text-sm xs:text-xs mb-4 max-w-[380px]">
                    En la plataforma Cero Trade cada transacción queda alojada en una blockchain,
                    maximizando la confianza, trazabilidad y transparencia del proceso
                </p>
                <p class="text-grays-2 other:text-sm xs:text-xs max-w-[380px]">
                    Usamos la Internet Computer Protocol (ICP), una de las blockchains que garantiza
                    <span class="font-bold">menor impacto ambiental</span>
                    y mayor seguridad en el manejo de datos
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-center py-8">
            <button
                class="bg-greens-1 w-32 text-xs py-2 px-2 font-bold cursor-pointer"
                id="start-btn"
                @click="redirectToGenerators"
            >
                Compra i-RECS
            </button>
        </div>
        <div class="flex flex-row justify-center my-12">
            <WelcomeBox
                subtitle="Sistema de compra venta"
                description='<p class="max-w-[440px]">En el Marketplace de Cero Trade
                <span class="font-bold">puede ofrecer sus i-RECs</span> a miles de clientes
                en tiempo real,
                automatizando el proceso de venta y accediendo a nuevos cosumidores</p>'
                buttonText="Conoce más aquí"
                @click="redirectToGenerators"
            >
            </WelcomeBox>
            <img :src=researcher alt="Researcher" id="researcher-image" class="xs:w-1/2"/>
        </div>
        <ContactUs></ContactUs>

    </div>
</template>
<script>

// utils
import { redirectToGenerators } from '@/utils/functions';

// components
import ContactUs from '@/components/boxes/contact-us.vue';
import WelcomeBox from '@/components/boxes/welcome-box.vue';

// images
import Complex from '@/assets/images/welcome/complex.svg';
import Costumers from '@/assets/images/welcome/costumers.svg';
import PC from '@/assets/images/welcome/pc.svg';
import Blockchain from '@/assets/images/welcome/blockchain.svg';
import Researcher from '@/assets/images/welcome/researcher.svg';

// icons
import Energy from '@/assets/icons/welcome/energy.svg';
import Balance from '@/assets/icons/welcome/balance.svg';
import Medal from '@/assets/icons/welcome/medal.svg';
import RightArrow from '@/assets/icons/welcome/right-arrow.svg';
import Stats from '@/assets/images/welcome/stats.svg';
import AchievementsrightArrow from '@/assets/icons/welcome/achievements-right-arrow.svg';

export default {
  data() {
    return {
      complex: Complex,
      costumers: Costumers,
      pc: PC,
      energy: Energy,
      balance: Balance,
      medal: Medal,
      rightArrow: RightArrow,
      stats: Stats,
      blockchain: Blockchain,
      researcher: Researcher,
      AchievementsrightArrow,
    };
  },
  components: {
    ContactUs, WelcomeBox,
  },
  methods: {
    redirectToGenerators,
  },
};
</script>
