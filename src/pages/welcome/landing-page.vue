<template>
    <div>
      <NFTs></NFTs>
      <header class="bg-background-gray h-28 font-inter flex justify-center items-center">
        <h1 class="text-grays-2 text-center text-3xl font-bold">
          Bienvenido a la versión Alfa de Cero Trade
        </h1>
      </header>
      <main class="flex flex-col items-center justify-center mt-16 px-4">
        <p class="text-center text-xl text-grays-2 max-w-2xl mb-8">
          Estamos emocionados de presentar nuestra nueva plataforma. Haga clic en el botón a
          continuación para comenzar a explorar.
        </p>
        <button
          @click="launchAlfaVersion"
          class="bg-greens-2 text-white font-bold py-3 px-8 rounded-lg shadow-md
          hover:bg-greens-3 transition duration-300 flex items-center gap-2"
        >
          Launch Alfa Version
          <img :src="arrowRight" alt="arrow-right icon">
        </button>
      </main>
    </div>
  </template>
  
  <script>
  import arrowRight from '@/assets/icons/welcome/navbar-right-arrow.svg';
  import NFTs from './nfts.vue'
  
  export default {
    components: {
      NFTs
    },
    data() {
      return {
        arrowRight,
      };
    },
    methods: {
      launchAlfaVersion() {
        window.location.href = 'https://z2mgf-dqaaa-aaaak-qihbq-cai.icp0.io/auth/login?canisterId=z2mgf-dqaaa-aaaak-qihbq-cai';
      },
    },
  };
  </script>
