<template>
  <div class="services ">
    <div class="services-text ">
      <p>Services</p>
      <p>Calitatile mele</p>
      <p>
        Phasellus eu neque auctor, consequat arcu non, viverra ex. Nullam
        volutpat in dolor nec lobortis. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus
      </p>
    </div>
    <div class="box-container">
      <div class="box-1">
        <span>1</span>
        <p class="heading">{{user.cv.skill1.title}}</p>
        <p class="details">{{user.cv.skill1.description}}</p>
      </div>
      <div class="box-2">
        <span>2</span>
        <p class="heading">{{user.cv.skill2.title}}</p>
        <p class="details">{{user.cv.skill2.description}}</p>
      </div>
      <div class="box-3">
        <span>3</span>
        <p class="heading">{{user.cv.skill3.title}}</p>
        <p class="details">{{user.cv.skill3.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeServices",
  computed: {
    user() {
      return this.$store.state.user
    }
  }
};
</script>

<style scoped>
.services {
  height: 600px;
  background-color: #ffffff;
  padding: 2% 10% 0px 10%;
}
.services-text p:nth-child(1) {
  font-family: calibri;
  font-weight: bold;
  color: #1d1c1c;
  font-size: 30px;
  line-height: 0px;
}
.services-text p:nth-child(2) {
  font-family: calibri;
  font-weight: bold;
  color: #3e3d3d;
  font-size: 15px;
  line-height: 5px;
}
.services-text p:nth-child(3) {
  font-family: calibri;
  color: #7e7d7d;
  font-size: 0px 0px 20px 0px;
}
.services-text {
  width: 500px;
  margin: 50px 0px;
}
.box-container {
  display: flex;
  justify-content: space-between;
}
.box-1,
.box-2,
.box-3 {
  width: 300px;
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0px 4px;
  background-color: #191919;
  border-radius: 20px;
}

/* .box-1 {
  background-image: url("../../assets/services-1.png");
}
.box-2 {
  background-image: url("../../assets/services-2.png");
}
.box-3 {
  background-image: url("../../assets/servies-3.png");
} */
.box-1 span,
.box-2 span,
.box-3 span {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: calibri;
  font-weight: bold;
}
.box-1 p:nth-child(2),
.box-2 p:nth-child(2),
.box-3 p:nth-child(2) {
  color: #ffffff;
  font-family: calibri;
  font-size: 23px;
  line-height: 0px;
}
.box-1 p:nth-child(3),
.box-2 p:nth-child(3),
.box-3 p:nth-child(3) {
  font-family: calibri;
  color: #8f8f8f;
  text-align: center;
  width: 230px;
  margin: 0px 0px 20px 0px;
}
.box-1 button,
.box-2 button,
.box-3 button {
  width: 100px;
  height: 30px;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
}

@media (max-width: 1000px) {
  .services {
    padding: 2% 5% 0px 5%;
  }
  .box-container {
    justify-content: center;
    flex-wrap: wrap;
  }
  .services {
    height: auto;
  }
  .box-1,
  .box-2,
  .box-3 {
    flex-grow: 1;
    margin: 10px;
  }
}

@media (max-width: 750px) {
  .services-text {
    width: 100%;
  }
}
</style>
