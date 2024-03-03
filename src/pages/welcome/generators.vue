<template>
    <div class="font-inter">
        <div
            class="bg-background-gray flex flex-row mt-5 h-64 other:px-44 md:!px-8 align-center"
            id="clients"
        >
            <img :src=clients alt="Clients" id="clients-images" class="xs:w-1/2"/>
            <p class="other:px-12 text-center text-grays-1">
                Gestionar energía sustentable en un proceso
                <span class="font-bold">innecesariamente </span>
                <span class="text-greens-2 underline font-bold">complejo</span>
                y
                <span class="text-greens-2 underline font-bold">agotador</span>
            </p>
        </div>
        <div
            class="bg-background-gray flex flex-row mt-5 h-64 other:px-44 align-center md:!px-4"
        >
            <p class="other:px-12 px-4 text-center text-grays-1">
                Por eso en Cero Trade hemos ideado un marketplace donde puede
                <span class="font-bold">convertir su sostenibilidad en ganancias</span>
                de la manera
                <span class="text-greens-2 underline font-bold">simple</span>
                y
                <span class="text-greens-2 underline font-bold">segura</span>
                del mercado
            </p>
            <img
                :src=costumers
                alt="Costumers"
                id="costumers-image"
                class="relative other:mt-12 xs:w-1/2"
            />
        </div>
        <div class="">
            <div class="flex flex-column text-center gap-8 other:mt-24 xs:mt-9">
                <h2 class="font-bold text-grays-1 text-2xl">Cómo funciona nuestro marketplace</h2>
                <p class="text-grays-2 other:px-72 xs:px-4 md:!px-8">
                    Nuestro servicio simplificado le permite
                    <span class="font-bold">gestionar</span>,
                    <span class="font-bold">trazar</span>
                    y
                    <span class="font-bold">visibilizar</span>
                    todas sus transacciones en el mismo lugar.
                </p>
            </div>
            <div class="flex justify-center mt-16">
                <img :src=pc alt="PC" id="pc-image" />
            </div>
        </div>
        <div class="flex flex-row justify-center align-center
        other:px-36 xs:px-2 md:!px-8 xs:gap-2 gap-2 mt-8 mb-4">
            <img :src=energy alt="Energy" id="energy-image" class="xs:w-5/12" />
            <div class="other:px-16 text-grays-1 md:!px-0">
                <h3 class="text-grays-1 other:text-xl xs:text-lg other:mb-8 xs:mb-2 font-bold">
                    Que su energía llegue más lejos
                </h3>
                <p class="text-grays-2 other:text-sm xs:text-xs max-w-[400px]">
                    Al convertir su energía sostenible en i-RECs,
                    <span class="font-bold">nuevos clientes</span>
                    podrán acceder a ella y con su ayuda
                    <span class="font-bold">compensar su huella de carbono.</span>
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-center align-center other:px-36 xs:px-2
        xs:gap-2 md:!px-8">
            <img :src=blockchain alt="Blockchain" id="blockchain-image" class="xs:w-5/12" />
            <div class="other:px-16 md:!px-0">
                <h3 class="text-grays-1 other:text-xl xs:text-lg other:mb-8 xs:mb-2 font-bold">
                    Un proceso completamente seguro
                </h3>
                <p class="text-grays-2 other:text-sm xs:text-xs mb-4 max-w-[400px]">
                    En la plataforma Cero Trade cada transacción queda alojada en una blockchain,
                    maximizando la confianza, trazabilidad y transparencia del proceso
                </p>
                <p class="text-grays-2 other:text-sm xs:text-xs max-w-[400px]">
                    Usamos la Internet Computer Protocol (ICP), una de las blockchains que garantiza
                    <span class="font-bold">menor impacto ambiental</span>
                    y mayor seguridad en el manejo de datos
                </p>
            </div>
        </div>
        <div class="flex flex-row gap-16 justify-center py-8">
            <button
                class="bg-greens-1 w-32 text-xs py-2 px-2 font-bold cursor-pointer"
                id="start-btn"
                @click="redirectToLink(linkForm)"
            >
                Vende i-RECS
            </button>
            <button
                class="bg-greens-1 w-32 text-xs py-2 px-2 font-bold cursor-pointer"
                id="start-btn"
                @click="redirectToLink(linkForm)"
            >
                    Redime i-RECS
            </button>
        </div>
        <div class="flex flex-row justify-center my-12">
            <WelcomeBox
                subtitle="Sistema de compra venta"
                description='<p class="max-w-[440px]">En el Marketplace de Cero Trade
                <span class="font-bold">puede obtener i-RECs</span> de un completo catálogo
                actualizado en tiempo real,
                automatizando el proceso de compra de acuerdo a sus necesidades</p>'
                buttonText="Conoce más aquí"
                @click="redirectToCompanies"
            >
            </WelcomeBox>
            <img :src=researcher alt="Researcher" id="researcher-image" class="xs:w-1/2" />
        </div>
        <ContactUs></ContactUs>
    </div>
</template>
<script>

import { redirectToCompanies, redirectToLink } from '@/utils/functions';

// Components
import ContactUs from '@/components/boxes/contact-us.vue';
import WelcomeBox from '@/components/boxes/welcome-box.vue';

// Images
import Clients from '@/assets/images/welcome/clients.svg';
import Costumers from '@/assets/images/welcome/costumers.svg';
import PC from '@/assets/images/welcome/pc.svg';
import Energy from '@/assets/images/welcome/energy.svg';
import Blockchain from '@/assets/images/welcome/blockchain.svg';
import Researcher from '@/assets/images/welcome/researcher.svg';

export default {
  data() {
    return {
      clients: Clients,
      costumers: Costumers,
      pc: PC,
      energy: Energy,
      blockchain: Blockchain,
      researcher: Researcher,
      linkForm: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
    };
  },
  components: {
    ContactUs,
    WelcomeBox,
  },
  methods: {
    redirectToCompanies,
    redirectToLink,
  },

};
</script>
