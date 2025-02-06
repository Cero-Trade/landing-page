<template>
  <section id="waiting-list" class="pt-16 pb-2">
    <div class="h-90 px-2 flex flex-row justify-center">

      <div class="w-1/2 gap-5 flex flex-column justify-center other:mr-15 xs:w-full xs:mx-2">
        <h2 class="font-semibold text-white text-5xl xs:text-2xl max-w-lg" style="text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.3);">
          Futuros Socios <span class="text-greens-1">Comprometidos</span> con Energía Verde
        </h2>
        <p class="font-light text-sm text-white max-w-lg xs:text-xs">
          Estas empresas han firmado Cartas de Intención para alojar IRECS en nuestra plataforma. Cada compromiso está representado como un NFT único, almacenado de forma segura en nuestra wallet, simbolizando su dedicación a soluciones de energía sostenible.
        </p>
        <button
          class="bg-greens-1 rounded-sm other:p-2.5 text-xs
          font-semibold w-1/4 hover:brightness-90
          xs:w-2/3 xs:p-2 cursor-pointer"
          id="start-btn"
          @click="scrollToContact"
        >Saber más</button>
      </div>

      <div class="w-1/4 xs:w-1/2"></div>
    </div>

    <swiper-container
      v-if="nfts.length"
      :breakpoints="{
        0: { slidesPerView: 1, },
        530: { slidesPerView: 2, },
        980: { slidesPerView: 3, },
        1500: { slidesPerView: 4, },
        1840: { slidesPerView: 5, },
      }"
      class="swiper-container mx-auto"
    >
      <swiper-slide
        v-for="nft in nfts" :key="nft.token_id"
        lazy="true"
        class="swiper-slide flex justify-center align-center"
        style="cursor: grab;"
      >
        <v-card
          :href="getNearBlocksUrlFromToken(nft.token_id)" target="_blank"
          color="#181e23"
          class="nft-card"
          @mousemove="move"
          @mouseleave="leave"
          @mouseover="over"
        >
          <div class="v-img__reflection"></div>
          <v-img
            :src="getIPFSUrl(nft.metadata.media)"
            :alt="nft.alt"
            width="100%"
            height="100%"
            color="#e2e2e2"
            lazy-src="https://th.bing.com/th/id/R.915f8a6c6a4bca38dc53fbdcc9c829c3?rik=cOeL%2fJza4k3Rbw&pid=ImgRaw&r=0"
          />

          <div class="nft-card__body flex flex-column justify-center bg-background-gray pa-5">
            <p class="font-semibold text-medium text-center" style="color: rgb(193, 232, 51);">Token ID: {{nft.token_id}}</p>
            <p class="font-medium text-center text-sm">{{nft.metadata.title}}</p>
          </div>
        </v-card>
      </swiper-slide>
    </swiper-container>

    <p v-else class="text-center" style="margin-block: 40px 80px;">Aún no hay registros en nuestra lista de espera.</p>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { getNFTs, getIPFSUrl, getNearBlocksUrlFromToken } from '@/plugins/near-api.js';

const
  nfts = ref([])


onBeforeMount(getData)


async function getData() {
  nfts.value = await getNFTs('jeph.near')
  console.log(nfts.value);
}

function scrollToContact() {
  document.getElementById('contact-us').scrollIntoView()
}


// hover effet
function over(event) {
  const refl = event.currentTarget.querySelector('.v-img__reflection');
  refl.style.opacity = 1;
}
function leave(event) {
  const card = event.currentTarget;
  const refl = event.currentTarget.querySelector('.v-img__reflection');
  card.style.transform = `perspective(500px) scale(1)`;
  refl.style.opacity = 0;
}

function move(event) {
  const card = event.currentTarget;
  const refl = event.currentTarget.querySelector('.v-img__reflection');

  const relX = (event.offsetX + 1) / card.offsetWidth;
  const relY = (event.offsetY + 1) / card.offsetHeight;
  const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
  const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
  card.style.transform = `perspective(500px) scale(1.2) ${rotY} ${rotX}`;

  const lightX = scale(relX, 0, 1, 150, -50);
  const lightY = scale(relY, 0, 1, 30, -100);
  const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
  const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255;
  const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
  const lightShadeBlack = `rgba(0, 0, 0, 1)`;
  refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
}

const scale = (val, inMin, inMax, outMin, outMax) =>
  outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
</script>

<style>
#waiting-list {
  background-color: #181e23;
}

.swiper-container {
  --blur: 13px;
  --opacity: .95;
  --width-ofuscated: 60px;
  --margin-position: 35px;
  width: calc(75vw + var(--width-ofuscated));
  height: clamp(450px, 35vw, 550px);
  position: relative;
  transition: .2 ease;
}

@media (max-width: 640px) {
  .swiper-container { width: 100% }
}

.swiper-slide:first-child {
  margin-left: calc(var(--width-ofuscated) - var(--margin-position));
}
/* trouble with this rule, is not having effect */
.swiper-slide:last-child {
  margin-right: calc(var(--width-ofuscated) + var(--margin-position));
}

.swiper-container::before {
  content: "";
  position: absolute;
  left: calc(var(--margin-position) * -1);
  top: 0;
  bottom: 0;
  background-color: hsl(207, 19%, 12%, var(--opacity));
  filter: blur(var(--blur));
  width: var(--width-ofuscated);
  height: 100%;
  z-index: 2;
}

.swiper-container::after {
  content: "";
  position: absolute;
  right: calc(var(--margin-position) * -1);
  top: 0;
  bottom: 0;
  background-color: hsl(207, 19%, 12%, var(--opacity));
  filter: blur(var(--blur));
  width: var(--width-ofuscated);
  height: 100%;
  z-index: 1;
}

.nft-card {
  --max-width: clamp(250px, 21vw, 280px);
  position: relative;
  max-width: var(--max-width);
  height: calc(var(--max-width) * 1.3);
  flex: 1 1 var(--max-width) !important;
  border-radius: 18px;
  
  transition: all .1s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  cursor: grab;
  z-index: 1;
}

.nft-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  box-sizing: border-box;
  background-color: hsl(207, 19%, 12%, .8);
  pointer-events: none;
}

.nft-card img {
  object-fit: cover;
}


/* hover effect below */
.nft-card:hover {
  transform: scale(1.2);
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .4);
}

.nft-card:hover .v-img {
  filter: grayscale(0)
}

.nft-card .v-img_reflection {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  transition: all .1s ease;
  mix-blend-mode: soft-light;
}

.nft-card .v-img {
  filter: grayscale(.2);
  transition: all .3s ease;
}
</style>
