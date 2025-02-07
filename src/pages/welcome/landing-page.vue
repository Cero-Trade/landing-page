<template>
  <section>
    <Introduction></Introduction>
    <Hero></Hero>
    <HowToWorks></HowToWorks>
    <AboutUs></AboutUs>
    <FAQ></FAQ>
    <ContactUs></ContactUs>
  </section>
</template>

<script setup>
import Introduction from '@/components/boxes/introduction.vue';
import Hero from '@/pages/welcome/sections/hero.vue';
import AboutUs from '@/pages/welcome/sections/about-us.vue';
import ContactUs from '@/pages/welcome/sections/contact-us.vue';
import HowToWorks from '@/pages/welcome/sections/how-to-works.vue';
import FAQ from '@/pages/welcome/sections/faq.vue';
</script>
