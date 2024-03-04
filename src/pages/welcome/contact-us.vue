<template>
    <div>
        <div class="flex flex-column text-center gap-8 mt-8 font-inter" id="contact-box">
            <h2 class="font-bold text-grays-1 text-2xl">Contáctanos</h2>
            <div class="bg-background-gray p-8">
                <p class="text-grays-2 other:px-64">
                    ¿Tienes alguna duda o comentario? ¿Te gustaría ser parte de nuestro equipo?
                    ¡Déjanos tu mensaje!
                </p>
            </div>
            <div class="flex flex-column gap-8 other:px-64 xs:px-2 py-4 mb-8">
                <input
                    type="text"
                    placeholder="Nombre"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                    v-model="name"
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                    v-model="email"
                />
                <input
                    type="text"
                    placeholder="Asunto"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                    v-model="subject"
                />
                <textarea
                    placeholder="Mensaje"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                    v-model="message"
                />
                <div class="flex justify-end">
                    <button
                        class="bg-greens-1 rounded-sm flex w-24 font-base text-sm
                        justify-center py-1 px-6 cursor-pointer"
                        @click="submit"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    submit() {
      axios.post(
        'https://script.google.com/macros/s/AKfycbxiveCGJT-IXOfp3dS16akcmlTi2Kv6ZXaPPLk_eSZ9uT2M8J8199fWleAxXRhI3NMX/exec',
        {
          nombre: this.nombre,
          correo: this.correo,
          asunto: this.asunto,
          mensaje: this.mensaje,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },
  },
};
</script>
