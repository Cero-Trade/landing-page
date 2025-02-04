<template>
  <div id="team-title" class="flex flex-column text-center gap-8 mt-8 font-inter">
    <h2 class="font-bold text-grays-1 text-2xl">Lista de espera</h2>
    <div class="bg-grays-3">
      <p class="text-grays-2 text-sm other:px-60 xs:px-4 py-10">
        Nuestra misión es lograr la reducción y compensación
        de las emisiones de carbono de las
        empresas productoras y exportadoras de Chile y Latam, entregando un valor
        común como el mercado más limpio del mundo.
      </p>
    </div>
  </div>
  
  <div v-if="nfts.length" class="flex flex-row justify-center flex-wrap p-8 gap-8 gap-x-2 xs:gap-x-16">
    <v-card
      v-for="nft in nfts" :key="nft.token_id"
      class="flex flex-column nft-card"
      :href="getNearBlocksUrl(nft.token_id)" target="_blank"
      max-width="220"
      width="100%"
    >
      <v-img
        :src="getUrl(nft.metadata.media)"
        :alt="nft.alt"
        width="100%"
        height="250"
        lazy-src="https://th.bing.com/th/id/R.915f8a6c6a4bca38dc53fbdcc9c829c3?rik=cOeL%2fJza4k3Rbw&pid=ImgRaw&r=0"
        class="rounded-md"
      />
      <div
        class="bg-background-gray rounded-md gap-4 p-5 w-100 h-100"
        style="box-shadow: 0px 5.56px 11.13px 0px #ABBED166;"
      >
        <p class="text-greens-4 font-semibold mb-2 text-medium text-center" style="text-decoration: underline;">Token ID: {{nft.token_id}}</p>
        <p class="text-grays-2 font-medium text-center text-sm">{{nft.metadata.title}}</p>
      </div>
    </v-card>
  </div>

  <p v-else class="text-center" style="margin-block: 40px 80px;">Aún no hay registros en nuestra lista de espera.</p>
</template>

<script>
import { getNFTs, getIPFSUrl, getNearBlocksUrlFromToken } from '@/plugins/near-api.js';

export default {
  data() {
    return {
      nfts: []
    };
  },
  async mounted() {
    this.nfts = await getNFTs('jeph.near')
    console.log(this.nfts);
  },
  methods: {
    getUrl(value) {
      return getIPFSUrl(value)
    },
    getNearBlocksUrl(value) {
      return getNearBlocksUrlFromToken(value)
    },
  },
};
</script>

<style>
.nft-card img {
  object-fit: cover
}
</style>
