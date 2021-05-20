<template>
    <section>
	<!--navigation------------------------->
	<nav>
	<!--logo-->
	<a href="#" class="logo">CV-Online</a>
	<!--menu-->
	<ul>
	<li><a href="#" class="active">Home</a></li>
	<li><a href="#">About</a></li>
	<li><a href="#">Contact us</a></li>
	<li><a href="#">Team</a></li>
	</ul>
	<!--bars--------------->
	<div class="toggle"></div>
	
	</nav>
  </section>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
ul{
	list-style:none;
}
a{
	text-decoration:none;
}
section{
	width:100%;
	height:95vh;
	background-image:url("../assets/bg.png");
	background-size:cover;
	background-repeat:no-repeat;
	position: relative;
}
nav {
	display: flex;
	justify-content: space-between;
	align-items:center;
	height:60px;
	background-color:#ffffff;
	box-shadow:2px 2px 12px rgba(0,0,0,0.2);
	padding:0px 5%;
	
}
nav ul{
	display: flex;
}
.toggle{
	display: none;
}
 
nav ul li a{
	margin:30px;
	font-family:myriad pro regular;
	color:#505050;
	font-size: 15px;
	font-weight:700;
}
.logo{
	font-family:RoadTest;
	color:#000000;
	font-size: 22px;
}
.active{
	color:#2d2a2a;
	font-weight:bold;
}
</style>