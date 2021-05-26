<template>
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
    <CurriculumVitaeServices />
    <CurriculumVitaeContact />
</template>

<script>
import CurriculumVitaeContent from "../components/cv-components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "../components/cv-components/CurriculumVitaeAbout.vue";
import CurriculumVitaeServices from "../components/cv-components/CurriculumVitaeServices.vue";
import CurriculumVitaeContact from "../components/cv-components/CurriculumVitaeContact.vue";

export default {
  name: "App",
  components: {
    CurriculumVitaeContent,
    CurriculumVitaeAbout,
    CurriculumVitaeServices,
    CurriculumVitaeContact,
  },
};
</script>

<style>
</style>