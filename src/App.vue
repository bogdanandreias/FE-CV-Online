<template>
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
    <CurriculumVitaeServices />
    <CurriculumVitaeContact />
</template>

<script>
import CurriculumVitaeContent from "./components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "./components/CurriculumVitaeAbout.vue";
import CurriculumVitaeServices from "./components/CurriculumVitaeServices.vue";
import CurriculumVitaeContact from "./components/CurriculumVitaeContact.vue";

export default {
  name: "App",
  components: {
    CurriculumVitaeContent,
    CurriculumVitaeAbout,
    CurriculumVitaeServices,
    CurriculumVitaeContact
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
