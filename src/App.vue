<template>
    <CurriculumVitaeContent />
    <CurriculumVitaeAbout />
</template>

<script>
import CurriculumVitaeContent from "./components/CurriculumVitaeContent.vue";
import CurriculumVitaeAbout from "./components/CurriculumVitaeAbout.vue";

export default {
  name: "App",
  components: {
    CurriculumVitaeContent,
    CurriculumVitaeAbout,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: block;
}
</style>
