<template>
    <div
        v-if="showPopup"
        @close="showPopup"
        class="bg-white other:w-1/2 xs:w-11/12 h-72 border-3 border-black
            border rounded-lg flex flex-row relative"
        style="box-shadow: 0px 0px 30px 0px #22294640"
    >
        <div class="h-8 cursor-pointer absolute right-0 top-0">
            <img
                :src="Close"
                alt="Close button"
                class="w-8 h-8 p-1 hover:brightness-90"
                @click="closeWelcomePopup"
            >
        </div>
        <div class="other:w-9/12 flex flex-column p-5 md:!p-3 xs:w-full">
            <div class="font-inter gap-2 flex flex-column xs:justify-center xs:h-full">
                <h1
                class="font-bold text-grays-1 other:text-[29px]
                xs:text-2xl md:!text-xl !leading-8"
                >
                    Estamos afinando los últimos detalles
                </h1>
                <p class="font-normal text-xs text-grays-2">
                    Mientras tanto, conozca aquí quiénes somos y reciba asesoramiento
                para la descarbonización de su empresa
                </p>
                <p class="font-normal text-[10px] text-grays-7 leading-3">
                    También puedes contactarnos para participar
                    de la validación de nuestro servicio y enterarte
                    antes que nadie de nuestro lanzamiento
                </p>
            </div>
            <div class="flex flex-column other:h-full justify-end" id="links">
                <div class="flex flex-row justify-between align-center">
                    <p
                        class="underline font-iria other:text-xs xs:text-xs
                         cursor-pointer text-grays-1 font-inria"
                        @click="closeWelcomePopup"
                    >Continúa a la página</p>
                    <button
                        class="bg-greens-1 rounded-sm other:px-6 other:py-1.5 text-[9px]
                        font-semibold hover:brightness-90 rounded-lg
                        xs:w-1/2 xs:p-2 cursor-pointer md:!p-1"
                        id="start-btn"
                        @click="redirectToContactUs"
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-end align-end w-2/3 xs:hidden overflow-hidden">
            <img
                :src="PopUpImage"
                alt="Welcome image"
                class="w-full h-full -mr-4 -mb-2"
            >
        </div>
    </div>
</template>
<script>
import { redirectToContactUs } from '@/utils/functions';

import PopUpImage from '@/assets/images/welcome/popup-image.svg';
import Close from '@/assets/icons/welcome/close.svg';

export default {
  data() {
    return {
      PopUpImage,
      Close,
    };
  },
  props: {
    showPopup: {
      type: Boolean,
    },
  },
  methods: {
    redirectToContactUs,
    closeWelcomePopup() {
      this.$emit('close');
    },
  },
};
</script>
