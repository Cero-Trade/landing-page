<template>
  <h1>Mis NFTs</h1>
  <div v-if="nfts.length">
    <v-card v-for="nft in nfts" :key="nft.token_id" class="nft-item" :href="getNearBlocksUrl(nft.token_id)" target="_blank">
      <img :src="getUrl(nft.metadata.media)" alt="NFT Image" />
      <p>{{ nft.metadata.title }}</p>
    </v-card>
  </div>
  <p v-else>No se encontraron NFTs.</p>
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
