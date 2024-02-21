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
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <input
                    type="text"
                    placeholder="Asunto"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <textarea
                    placeholder="Mensaje"
                    class="border-[1.5px] border-solid bg-background-gray
                    text-grays-2 rounded-sm border-grays-2 px-4 py-2  placeholder:text-grays-2"
                />
                <div class="flex justify-end">
                    <button
                        class="bg-greens-1 rounded-sm flex w-24 font-base text-sm
                        justify-center py-1 px-6 cursor-pointer"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
