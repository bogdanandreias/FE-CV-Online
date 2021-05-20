<template>
    <Navbar />
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
    <CurriculumVitaeServices />
    <CurriculumVitaeContact />
    <Footer />
</template>

<script>
import CurriculumVitaeContent from "./components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "./components/CurriculumVitaeAbout.vue";
import CurriculumVitaeServices from "./components/CurriculumVitaeServices.vue";
import CurriculumVitaeContact from "./components/CurriculumVitaeContact.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    CurriculumVitaeContent,
    CurriculumVitaeAbout,
    CurriculumVitaeServices,
    CurriculumVitaeContact,
    Navbar,
    Footer
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

#app {
  min-height: 100vh;
  display: block;
}
</style>
