<template>
    <Navbar />
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
    <CurriculumVitaeServices />
    <CurriculumVitaeContact />
    <Footer />
</template>

<script>
import CurriculumVitaeContent from "../components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "../components/CurriculumVitaeAbout.vue";
import CurriculumVitaeServices from "../components/CurriculumVitaeServices.vue";
import CurriculumVitaeContact from "../components/CurriculumVitaeContact.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

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
</style>