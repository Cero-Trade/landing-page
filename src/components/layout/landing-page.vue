<template>
    <div>
      <WelcomeNavbar v-if="!isMobile" />
      <Drawer v-else />
      <Introduction></Introduction>
      <router-view></router-view>
      <WelcomeFooter v-if="!isMobile" />
    </div>
  </template>

<script>
import Introduction from '@/components/boxes/introduction.vue';
import WelcomeNavbar from '@/components/navigation/welcome-navbar.vue';
import Drawer from '../navigation/drawer.vue';
import WelcomeFooter from '../navigation/footer.vue';

export default {
  components: {
    WelcomeNavbar,
    Introduction,
    WelcomeFooter,
    Drawer,
  },
  data() {
    return {
      drawer: false,
      isMobile: window.innerWidth <= 760,
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
