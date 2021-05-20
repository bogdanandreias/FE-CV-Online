<template>
  <div>
    <div class="about-container">
      <!--img-->
      <img src="../assets/about_photo.png" />
      <!--about-me-text-->
      <div class="about-text">
        <p>About Me</p>
        <p>Devolper & Student</p>
        <p>
          Hello,My name is Bertea Fabian. I am a Devolper at Principal33.If you
          have asany Project or if you want make a software for your business
          conatact me.I make as soon as possibale.You really like my work,if you
          don&#8217;t like my work i'll change it until I give you a
          satisfaction result.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          lorem erat. Nunc ut tempor est, non luctus justo. Quisque sed bibendum
          purus.
        </p>
        <button>Hire Me</button>
        <button>Download CV</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeAbout",
};
</script>

<style scoped>
.about-container {
  width: 80%;
  height: 330px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: -7% auto 20px auto;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
}
.about-container img {
  height: 250px;
}
.about-text {
  width: 500px;
}
.about-text p:nth-child(1) {
  color: #403e3e;
  font-family: myriad pro;
  font-weight: bold;
  font-size: 23px;
  line-height: 0px;
}
.about-text p:nth-child(2) {
  color: #3e3d3d;
  font-size: 13px;
  font-family: myriad pro;
  font-weight: bold;
  line-height: 5px;
}
.about-text p:nth-child(3),
.about-text p:nth-child(4) {
  color: #7e7d7d;
  font-family: calibri;
  font-size: 16px;
}
.about-text button {
  width: 120px;
  height: 40px;
  color: #ffffff;
  outline: none;
  border: none;
  font-family: calibri;
  background-color: #262525;
}
</style>
