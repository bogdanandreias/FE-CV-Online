<template>
  <div class="contact-me">
    <p>If You Have Any Project In Your Mind ?</p>
    <div >
      <a class="button" :href="`mailto:` + user.email">Contact me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeContact",
  computed: {
    user() {
      return this.$store.state.user
    }
  }
};
</script>

<style scoped>

.contact-me {
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../../assets/project in your mind.png");
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
}
.contact-me .button {
  border-radius: 10px;
  width: 200px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 50px;
  text-decoration: none;
  color: #191919;
}

@media (max-width: 1000px) {
  .contact-me {
    height: 200px;
  }
  .contact-me p {
    font-size: 26px;
  }
  .contact-me .button {
    font-size: 14px;
    height: 35px;
    width: 160px;
  }
}

@media (max-width: 750px) {
  .contact-me {
    height: 180px;
  }
  .contact-me p {
    font-size: 18px;
  }
  .contact-me button {
    width: 150px;
    height: 33px;
  }
}
</style>
