function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function redirectToContactUs() {
  this.$router.push('/contact-us');
  setTimeout(() => {
    const contactUs = document.getElementById('contact-box');
    const scrollPosition = contactUs.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToMVPAlfa() {
  this.$router.push('/alfa');
}

export function redirectToCompanies() {
  this.$router.push('/companies');
  setTimeout(() => {
    const welcomeBox = document.getElementById('troubles-box');
    const scrollPosition = welcomeBox.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToGenerators() {
  this.$router.push('/generators');
  setTimeout(() => {
    const welcomeBox = document.getElementById('clients');
    const scrollPosition = welcomeBox.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToAboutUs() {
  this.$router.push('/about-us');
  setTimeout(() => {
    const team = document.getElementById('team-title');
    const scrollPosition = team.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToFAQ() {
  this.$router.push('/faq');
  setTimeout(() => {
    const faqsBox = document.getElementById('faqs-box');
    const scrollPosition = faqsBox.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToAchievements() {
  this.$router.push('/');
  setTimeout(() => {
    const team = document.getElementById('achievements-box');
    const scrollPosition = team.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToMission() {
  this.$router.push('/about-us');
  setTimeout(() => {
    const team = document.getElementById('team-title');
    const scrollPosition = team.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToLink(link) {
  window.open(link, '_blank');
}

export function redirectToHowItWorks() {
  this.$router.push('/');
  setTimeout(() => {
    const container = document.getElementById('how-it-works-box');
    const scrollPosition = container.offsetTop - 70;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }, 300);
}

export function redirectToHome() {
  this.$router.push('/');
  setTimeout(() => {
    scrollToTop();
  }, 300);
}
