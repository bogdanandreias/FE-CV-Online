<template>
  <!--navigation------------------------->
  <nav>
    <!--logo-->
      <router-link to="/" class="logo">CV Online</router-link>
    <!--menu-->
    <ul>
      <router-link to="/">Home</router-link>
      <!-- <li><a href="#" class="active">Home</a></li> -->
      <router-link to="/edit">Edit</router-link>
      <a @click="logout">Logout</a>
    </ul>
    <!--bars--------------->
    <div class="toggle"></div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      this.$router.push('/login')
      location.reload();
    },
  }
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  padding: 0px 5%;
}
nav ul {
  display: flex;
}
.toggle {
  display: none;
  color: transparent;
  width: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../assets/menu-button.png");
}

ul a {
  margin: 30px;
  font-family: myriad pro regular;
  color: #505050;
  font-size: 15px;
  font-weight: 700;
}
.logo {
  font-family: RoadTest;
  color: #000000;
  font-size: 22px;
  &.router-link-active {
    color: #000000;
    font-weight: normal;
  }
}
.router-link-active {
  color: #2d2a2a;
  font-weight: bold;
}

@media (max-width: 750px) {
  .toggle {
    display: block;
  }

  nav ul {
    margin: 0px;
    padding: 0px;
    background-color: #ebeef4;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    display: none;
  }
  nav ul li {
    padding: 10px;
  }
  nav ul li a {
    font-family: calibri;
    font-size: 1.4em;
    text-transform: uppercase;
    color: #5c5c5c;
  }
  nav ul li a:hover {
    color: #121212;
  }
  .toggle:before {
    content: "\f0c9";
    font-family: fontAwesome;
    line-height: 30px;
    z-index: 1;
  }
  .toggle.active:before {
    content: "\f00d";
    position: fixed;
    right: 25px;
    line-height: 0px;
  }
  nav.active ul {
    display: flex !important;
  }
}
</style>
