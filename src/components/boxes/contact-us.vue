<template>
    <div class="flex flex-column align-center bg-grays-3 py-10">
        <h2 class="font-bold text-grays-1 text-2xl mb-4">Contáctanos</h2>
        <button
          class="rounded-md text-md text-grays-2 border-solid border-[1.5px]
           border-grays-2 px-6 py-2 cursor-pointer"
          @click="redirectToContactUs">
            Mensaje
        </button>
    </div>
</template>
<script>

import { redirectToContactUs } from '@/utils/functions';

export default {
  data() {
    return {
    };
  },
  methods: {
    redirectToContactUs,
  },
};
</script>
