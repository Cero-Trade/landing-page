<template>
    <div class="bg-background-gray">
        <div
            id="introduction"
            class="h-90 mt-15 px-2 py-16 flex flex-row justify-center
            "
        >
            <div
                id="text"
                class="w-1/2 gap-5 flex flex-column justify-center other:mr-15
                xs:w-full xs:mx-2"
            >
                <h2
                id="main-text"
                class="font-semibold text-grays-1 text-5xl
                xs:text-2xl max-w-lg"
                style="text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.3);"
                >
                    Ser <span class="text-greens-1">verde</span> nunca fue tan fácil
                </h2>
                <p class="font-light text-sm text-grays-2 max-w-lg
                xs:text-xs">
                    Ayudamos a su empresa a obtener certificados de energía limpia de la manera
                    más simple, transparente y barata del mercado
                </p>
                <button
                    class="bg-greens-1 rounded-sm other:p-2.5 text-xs
                    font-semibold w-1/4 hover:brightness-90
                    xs:w-2/3 xs:p-2 cursor-pointer"
                    id="start-btn"
                    @click="redirectToLink(formLink)"
                >
                    Quiero ser verde
                </button>
            </div>
            <img :src=TeamWork alt="Welcome image" class="w-1/4
            xs:w-1/2">
        </div>
    </div>
    <div id="costumers" class="bg-background-black">
        <div id="top-box" class="h-22 py-7 flex flex-column justify-center align-center gap-2">
                <h3 class="text-greens-1 text-center text-xl leading-7 mb-0 max-w-[430px]">
                    En Cero Trade hacemos accesible el mercado de activos climáticos
                </h3>
                <p class="text-center text-grays-3 text-sm font-light max-w-[500px]">
                    Somos un marketplace basado en blockchain que democratiza el acceso a
                    certificados de energía renovable (i-RECs) en América Latina.
                </p>
        </div>
    </div>
</template>

<script>
import teamWork from '@/assets/images/welcome/team-work.svg';
import { redirectToLink } from '@/utils/functions';

export default {
  data() {
    return {
      TeamWork: teamWork,
      formLink: 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
    };
  },
  methods: {
    redirectToLink,
  },
};
</script>
