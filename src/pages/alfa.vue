<template>
    <div>
      <header class="bg-background-gray h-28 font-inter flex justify-center items-center">
        <h1 class="text-grays-2 text-center text-3xl font-bold">
          Bienvenido a la versión Alfa de Cero Trade
        </h1>
      </header>
      <main class="flex flex-col items-center justify-center mt-16 px-4">
        <p class="text-center text-xl max-w-2xl mb-8">
          Estamos emocionados de presentar nuestra nueva plataforma. Haga clic en el botón a
          continuación para comenzar a explorar.
        </p>
        <button
          @click="launchAlfaVersion"
          class="bg-greens-2 text-white font-bold py-3 px-8 rounded-lg shadow-md
          hover:bg-greens-3 transition duration-300"
        >
          Launch Alfa Version
        </button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      launchAlfaVersion() {
        window.location.href = 'https://z2mgf-dqaaa-aaaak-qihbq-cai.icp0.io/auth/login?canisterId=z2mgf-dqaaa-aaaak-qihbq-cai';
      },
    },
  };
  </script>
  
  <style scoped>
  
  .bg-background-gray {
    background-color: #f5f5f5;
  }
  
  .text-grays-2 {
    color: #4a4a4a;
  }
  
  .bg-greens-2 {
    background-color: #6ec177;
  }
  
  .bg-greens-3 {
    background-color: #5aa865;
  }
  
  button:hover {
    filter: brightness(95%);
  }
  
  /* Ensure the correct font is applied */
  body, html {
    font-family: 'Inter', sans-serif;
  }
  </style>
  