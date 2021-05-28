<template>
  <div>
    <div class="about-container">
      <img :src='$store.state.uploads_url + user.image' />
      <div class="about-text">
        <p>About Me</p>
        <p>{{user.cv.occupation}}</p>
        <p>{{user.cv.about}}</p>
        <button class="hire-btn">Hire Me</button>
        <button @click="openCv()" class="down-cv">Open CV</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeAbout",
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    openCv() {
      window.open(this.$store.state.uploads_url + this.$store.state.user.pdf, '_blank');
    },
  }
}
</script>

<style scoped>
.about-text button {
  width: 130px;
  height: 42px;
  border-radius: 10px;
  font-family: calibri;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  margin: 0px 10px;
  cursor: pointer;
}
.about-text button:first-of-type {
  margin: 0;
}
.hire-btn {
  border: 2px solid #373636;
  color: #373636;
  background-color: transparent;
}
.down-cv {
  background-color: #0b0b0b;
  color: #fff;
  border: none;
}
button:active {
  transform: scale(1.1);
}
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

@media(max-width:1000px){

	.about-container{
		width:90%;
		border-radius: 10px;
	}
	.about-container img{
		height: 200px;
	}
	.about-text{
		width: 400px;
	}
	.about-text p:nth-child(1){
		font-size: 20px;
	}
	.about-text p:nth-child(2){
		font-size: 10px;
	}
	
	.about-text p:nth-child(3),
	.about-text p:nth-child(4){
		font-size: 14px;
	}
	.services{
		padding: 2% 5% 0px 5%;
	}
	.box-container{
		justify-content: center;
		flex-wrap: wrap;
	}
}

@media(max-width:750px){

	.about-container{
		top: 0px;
		flex-direction: column;
		width:90%;
		height: auto;
		padding: 30px 0px;
		align-items: center;
	}
	.about-text{
		width:90%;
		text-align: center;
	}
}
</style>
