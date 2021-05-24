<template>
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
    <CurriculumVitaeServices />
    <CurriculumVitaeContact />
</template>

<script>
import CurriculumVitaeContent from "../components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "../components/CurriculumVitaeAbout.vue";
import CurriculumVitaeServices from "../components/CurriculumVitaeServices.vue";
import CurriculumVitaeContact from "../components/CurriculumVitaeContact.vue";

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