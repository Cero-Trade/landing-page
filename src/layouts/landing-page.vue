<template>
    <div>
      <WelcomeNavbar v-if="!isMobile" />
      <Drawer v-else />
      <Introduction></Introduction>
      <LandingPage></LandingPage>
      <HowToWorks></HowToWorks>
      <AboutUs></AboutUs>
      <WaitingList></WaitingList>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
      <WelcomeFooter v-if="!isMobile" />
    </div>
  </template>

<script>
import WelcomeNavbar from '@/components/navigation/welcome-navbar.vue';
import Drawer from '@/components/navigation/drawer.vue';
import WelcomeFooter from '@/components/navigation/footer.vue';
import Introduction from '@/components/boxes/introduction.vue';
import LandingPage from '@/pages/welcome/landing-page.vue';
import AboutUs from '@/pages/welcome/about-us.vue';
import WaitingList from '@/pages/welcome/waiting-list.vue';
import ContactUs from '@/pages/welcome/contact-us.vue';
import HowToWorks from '@/pages/welcome/how-to-works.vue';
import FAQ from '@/pages/welcome/faq.vue';

export default {
  components: {
    WelcomeNavbar,
    WelcomeFooter,
    Drawer,
    Introduction,
    LandingPage,
    AboutUs,
    WaitingList,
    ContactUs,
    HowToWorks,
    FAQ
  },
  data() {
    return {
      drawer: false,
      isMobile: window.innerWidth <= 760,
      showPopup: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 760;
    },
  },
};
</script>
