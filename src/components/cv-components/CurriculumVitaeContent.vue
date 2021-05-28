<template>
  <section />
  <div class="content-container">
    <div class="text-container">
      <p>Hello,</p>
      <p class="user-name">I&#8217;M {{user.firstName}}</p>
      <p>{{user.cv.occupation}}</p>
      <button class="hire-btn">Hire me</button>
      <button @click="openCv()" class="down-cv">Open CV</button>
    </div>
    <img alt="model" class="model" src="../../assets/cv_header.png" />
  </div>
</template>

<script>
export default {
  name: "CurriculumVitaeContent",
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
};
</script>

<style scoped>
.text-container button {
  cursor: pointer;
}
.text-container button:first-of-type {
  margin: 0;
}
.user-name {
  text-transform: uppercase;
}
section {
  width: 100%;
  height: 95vh;
  background-image: url("../../assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.model {
  height: 530px;
  position: absolute;
  bottom: 40px;
  left: 75%;
  transform: translateX(-75%);
}
.text-container p:nth-child(1) {
  font-family: calibri;
  font-weight: bold;
  color: #6d6d6d;
  font-size: 22px;
}
.text-container p:nth-child(2) {
  font-family: calibri;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1a1a1a;
  font-size: 60px;
}
.text-container p:nth-child(3) {
  font-family: myriad pro regular;
  color: #403e3e;
  font-size: 30px;
  line-height: 30px;
}

.text-container p {
  margin: 45px 0px 25px;
  line-height: 0px;
}
.text-container button {
  width: 130px;
  height: 42px;
  border-radius: 10px;
  font-family: calibri;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  margin: 0px 10px;
}
.text-container {
  position: absolute;
  left: 13%;
  top: 42%;
  transform: translate(-13%, -42%);
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

@media(max-width:1000px){
	.model{
		height: 460px;
		left: 90%;
		transform: translateX(-90%);
	}
	.text-container{
		top:46%;
	}
	.text-container button{
		margin: 5px;
	}
}

@media(max-width:750px){
	section{
		background-image:none;
		background-color:#f7f7f7;
	}
	.model{
		display: none;
	}
	.toggle{
		display: block;
	}
	.text-container p:nth-child(2){
		line-height: 40px;
		margin: 0px;
		padding: 0px;
		
	}
	.text-container{
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 80%;
	}
	
}
</style>
