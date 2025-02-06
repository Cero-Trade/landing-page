<template>
    <nav
      id="navbar"
      class="bg-background-black font-inter h-8 fixed top-0 w-full px-8 py-8 flex z-50"
    >
      <div class="flex flex-row gap-8 place-items-center w-full justify-center">
        <img :src="navbarLogo" alt="Logo" id="logo-home-navbar" style="cursor: pointer" @click="redirectToHome">

        <span
          v-for="(item, i) in items" :key="i"
          class="text-grays-3 text-xs cursor-pointer"
          @click="item.action"
        >{{ item.name }}</span>

        <!-- <button
          class="text-xs bg-greens-1 rounded-sm flex hover:brightness-95 px-4
          flex-row py-2.5 font-medium items-center gap-1.5 cursor-pointer"
          id="home-navbar-btn"
          @click="redirectToMVPAlfa"
        >
          Probar Alfa MVP
          <img :src="arrowRight" alt="arrow-right icon">
        </button> -->
      </div>
    </nav>
  </template>

<script setup>
import navbarLogo from '@/assets/logos/logo-home-navbar.svg';

const 
  formLink = 'https://h9hk1icgi92.typeform.com/to/KBvFGq8Y',
  items = [
    {
      name: "Inicio",
      action: () => document.documentElement.scrollTop = 0,
    },
    {
      name: "Cómo Funciona",
      action: () => document.getElementById('how-to-works').scrollIntoView(),
    },
    {
      name: "Quiénes Somos",
      action: () => document.getElementById('about-us').scrollIntoView(),
    },
    {
      name: "Lista de espera",
      action: () => document.getElementById('waiting-list').scrollIntoView(),
    },
    {
      name: "Preguntas Frecuentes",
      action: () => document.getElementById('faq').scrollIntoView(),
    },
    {
      name: "Contacto",
      action: () => document.getElementById('contact-us').scrollIntoView(),
    },
  ]


function redirectToHome() {
  document.documentElement.scrollTop = 0
}
</script>
