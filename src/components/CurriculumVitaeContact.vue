<template>
  <div class="contact-me">
    <p>If You Have Any Project In Your Mind ?</p>
    <button>Contact me</button>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeContact",
};
</script>

<style scoped>
.contact-me {
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/project in your mind.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
}
.contact-me p {
  color: #ffffff;
  font-size: 30px;
  font-family: calibri;
  font-weight: bold;
  border-bottom: 2px solid #ffffff;
}
.contact-me button {
  width: 200px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
}
</style>
