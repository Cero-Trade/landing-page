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
        <div class="other:w-2/3 flex flex-column p-5 md:!p-3 xs:w-full">
            <div class="font-inter gap-2 flex flex-column xs:justify-center xs:h-full">
                <h1 class="font-semibold text-grays-1 other:text-3xl xs:text-xl md:!text-xl">
                    Estamos afinando los últimos detalles
                </h1>
                <p class="font-normal text-xs text-grays-2">
                    Mientras tanto, conozca aquí qué somos y reciba asesoramiento
                para la descarbonización de su empresa
                </p>
            </div>
            <div class="flex flex-column other:h-full justify-end" id="links">
                <div class="flex flex-row justify-between align-center">
                    <p
                        class="underline font-iria other:text-sm xs:text-xs
                         cursor-pointer text-black"
                        @click="closeWelcomePopup"
                    >No, gracias</p>
                    <button
                        class="bg-greens-1 rounded-sm other:p-2.5 text-xs
                        font-semibold hover:brightness-90
                        xs:w-1/2 xs:p-2 cursor-pointer md:!p-1"
                        id="start-btn"
                        @click="redirectToLink(formLink)"
                    >
                        Quiero ser verde
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
import { redirectToLink } from '@/utils/functions';

import PopUpImage from '@/assets/images/welcome/popup-image.svg';
import Close from '@/assets/icons/welcome/close.svg';

export default {
  data() {
    return {
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
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
    redirectToLink,
    closeWelcomePopup() {
      this.$emit('close');
    },
  },
};
</script>
