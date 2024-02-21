<template>
    <div>
        <div
          class="flex flex-column text-center gap-8 mt-8 font-inter"
          id="faqs-box"
        >
            <h3 class="font-bold text-grays-1 text-2xl">Preguntas frecuentes</h3>
        </div>
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="mt-4"
        >
            <div class="bg-background-gray p-4 align-center justify-center">
                <h3 class="text-base text-grays-2 font-semibold other:pl-12">
                  {{faq.id}}. {{faq.question}}
                </h3>
            </div>
            <div v-html="faq.answer"
            class="py-5 other:px-24 xs:px-8 text-grays-2 text-sm leading-5"></div>
        </div>
        <ContactUs></ContactUs>
    </div>
</template>
<script>

// components
import ContactUs from '@/components/boxes/contact-us.vue';

export default {
  components: {
    ContactUs,
  },
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: '¿Qué es un i-REC?',
          answer: `<p>Un I-REC (International Renewable Energy Certificate) es un <span class="font-bold">certificado</span> que representa la propiedad de una cantidad específica de <span class="font-bold">energía renovable generada y entregada a la red eléctrica.</span></p>
                            <p>Estos certificados permiten <span class="font-bold">afirmar el uso de energía limpia</span>, esencial para la sostenibilidad y reducir la huella de carbono, impulsando la inversión en energías renovables y proporcionando una verificación transparente del origen renovable de la energía consumida.</p>
                            <p>Cada i-REC es un atributo que <span class="font-bold">representa 1 megavatio-hora (MWh) de energía renovable</span> ingresada a la red.</p>`,
        },
        {
          id: 2,
          question: '¿Qué es un MWh?',
          answer: `<p>Un megavatio-hora (MWh) es una unidad de medida de energía que <span class="font-bold">equivale a la cantidad de energía generada de 1000 Watts durante una hora.</span></p>
                            <p>Se utiliza comúnmente para <span class="font-bold">medir la producción de energía en plantas de generación eléctrica o el consumo de energía a gran escala</span>, como en ciudades o grandes instalaciones industriales.</p>`,
        },
        {
          id: 3,
          question: '¿Qué validez tienen los i-RECs?',
          answer: `<p>Diversos programas y estándares de sostenibilidad reconocen los i-RECs como un <span class="font-bold">mecanismo válido para demostrar el uso de energía renovable.</span></p>
                            <p>Esto incluye iniciativas como el <span class="text-greens-2">Science Based Targets initiative (SBTi)</span> y <span class="text-greens-2">el Carbon Disclosure Project (CDP)</span>, que permiten a las empresas incluir I-RECs en sus <span class="font-bold">reportes de sostenibilidad</span> y <span class="font-bold">huella de carbono.</span></p>`,
        },
        {
          id: 4,
          question: '¿Cómo se generan los i-REC?',
          answer: `<p>La generación de I-RECs sigue un <span class="font-bold">proceso estructurado para asegurar la trazabilidad, verificabilidad e integridad del certificado</span> como representación de energía renovable generada. Esto proporciona a empresas y consumidores una <span class="font-bold">herramienta confiable</span> para demostrar su consumo de energía verde de manera transparente.</p>
                            <p>Este proceso implica pasos clave desde la generación de energía hasta la emisión del certificado. Se inicia con el <span class="font-bold">registro del productor de energía renovable</span> en el sistema I-REC, seguido de una <span class="font-bold">evaluación por parte de un emisor autorizado</span> para garantizar el cumplimiento con los criterios de sostenibilidad y elegibilidad.</p>
                            <p>Una vez medida y verificada la energía generada, <span class="font-bold">el emisor emite los i-RECs</span>, cada uno representando 1 MWh de energía renovable y con un número único para trazabilidad. Estos certificados <span class="font-bold">se registran en la plataforma i-REC</span> para su comercialización, transferencia o cancelación, asegurando la trazabilidad y evitando la duplicación, con la opción de venta en la plataforma <span class="text-greens-2-2">Cero Trade</span>.</p>`,
        },
        {
          id: 5,
          question: '¿Cómo puedo compensar mi huella de carbono usando i-REC?',
          answer: `<p>Al comprar I-RECs, una empresa <span class="font-bold">asegura que su electricidad proviene de fuentes renovables</span>, demostrando su compromiso con la sostenibilidad. Al adquirir I-RECs equivalentes a su consumo total, puede afirmar que toda su electricidad es limpia.</p>
                            <p>Estos certificados permiten <span class="font-bold">cumplir objetivos de reducción de emisiones</span>, mostrando progreso en la reducción de la huella de carbono y mejorando la imagen ante stakeholders y clientes.</p>`,
        },
        {
          id: 6,
          question: '¿Es lo mismo que un crédito de Carbono?',
          answer: `<p>No, <span class="font-bold">los i-REC son una nueva certificación de energía renovable</span>. Los i-RECs se centran en la promoción del uso de energía renovable y aseguran que la electricidad consumida por el comprador proviene de fuentes renovables.</p>
                            <p>Por su parte, los créditos de carbono se enfocan en la compensación de emisiones de gases de efecto invernadero, independientemente de la fuente de estas emisiones. Los i-RECs permiten la compensación de emisiones relacionadas con el consumo de energía eléctrica (Scope 2) y son igualmente válidos.</p>`,
        },
        {
          id: 7,
          question: '¿Cómo puedo emitir i-RECs siendo una generadora?',
          answer: '<p>Debe registrar sus plantas de energía renovable en el <span class="text-greens-2 font-bold">sistema i-REC</span> para que se realice la conversión.</p>',
        },
        {
          id: 8,
          question: '¿A qué certificaciones puedo acceder compensando mi consumo con i-RECs?',
          answer: `<p>Al compensar su huella de carbono con a través de i-RECS usted puede acceder a <span class="font-bold">certificaciones que tienen las mejores empresas del mundo el día de hoy</span>, lo que hará a su empresa más verde, y por consecuencia, más atractiva para potenciales clientes y consumidores.</p>
                            <p>Entre las certificaciones y marcos ambientales que reconocen el uso de i-RECS se encuentran:</p>
                            <p>• <span class="underline">GHG Protocol (Protocolo de Gases de Efecto Invernadero)</span></p>
                            <p>• <span class="underline">SBTs (Science Based Targets)</span></p>
                            <p>• <span class="underline">CDP (anteriormente conocido como Carbon Disclosure Project)</span></p>
                            <p>• <span class="underline">LEED (Leadership in Energy and Environmental Design)</span></p>
                            <p>• <span class="underline">RE100</span></p>
                            <p>• <span class="underline">Green-e</span></p>`,
        },
        {
          id: 9,
          question: '¿Cómo funciona Cero Trade?',
          answer: '<p>Cero Trade es un <span class="font-bold">marketplace</span> en el cual <span class="font-bold">tanto generadoras como empresas podrán visualizar y comerciar i-RECs.</span> De esta forma, pueden gestionar, trazar y visibilizar todas sus transacciones de i-RECs en el mismo lugar.</p>',
        },
        {
          id: 10,
          question: '¿Por qué usan Blockchain?',
          answer: `<p>En Cero Trade cada transacción queda alojada en una blockchain, lo que <span class="font-bold">maximiza la confianza, trazabilidad y transparencia</span> del proceso.</p>
                        <p>Usamos la <span class="font-bold">Internet Computer Protocol (ICP)</span>, una de las blockchains que garantiza <span class="font-bold">menor impacto ambiental y mayor seguridad</span> en el manejo de datos.</p>`,
        },
        {
          id: 11,
          question: '¿Puedo ingresar a Cero Trade como Trader?',
          answer: '<p>Sí. Nuestra plataforma facilita el intercambio de i-RECs para <span class="font-bold">todos los agentes involucrados</span> en el proceso de compensación de energía.</p>',
        },
        {
          id: 12,
          question: '¿Cómo me hago una cuenta en Cero Trade?',
          answer: '<p>Solo debe registrarse señalando si es una Generadora, Empresa o Trader para <span class="font-bold">personalizar su experiencia.</span></p>',
        },
      ],
    };
  },
};
</script>
