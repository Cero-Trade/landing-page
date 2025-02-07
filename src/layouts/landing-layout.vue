<template>
    <div>
      <WelcomeNavbar v-if="!isMobile" />
      <Drawer v-else />
      <router-view></router-view>
      <WelcomeFooter v-if="!isMobile" />
    </div>
  </template>

<script>
import WelcomeNavbar from '@/components/navigation/welcome-navbar.vue';
import Drawer from '@/components/navigation/drawer.vue';
import WelcomeFooter from '@/components/navigation/footer.vue';

export default {
  components: {
    WelcomeNavbar,
    WelcomeFooter,
    Drawer,
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
