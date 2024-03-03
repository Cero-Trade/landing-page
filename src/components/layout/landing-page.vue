<template>
    <div>
      <WelcomeNavbar v-if="!isMobile" />
      <Drawer v-else />
      <div v-if="showPopup"
      class="absolute w-full flex justify-center mt-24 backdrop-blur-sm other:p-8 xs:p-4">
            <WelcomePopUp :showPopup="showPopup" @close="showPopup = false"></WelcomePopUp>
      </div>
      <Introduction></Introduction>
      <router-view></router-view>
      <WelcomeFooter v-if="!isMobile" />
    </div>
  </template>

<script>
import WelcomePopUp from '@/components/toast-content/welcome-popup.vue';
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
    WelcomePopUp,
  },
  data() {
    return {
      drawer: false,
      isMobile: window.innerWidth <= 760,
      showPopup: true,
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
