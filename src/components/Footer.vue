<template>
  <div>
    <footer>
      <p>CV-Online</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
        aliquet quam, sit amet tincidunt lorem efficitur et. Maecenas pretium ex
        a aliquam scelerisque.
      </p>
      <div class="social-icons">
        <a href="#"
          ><i
            ><font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'facebook' }"/></i
        ></a>
        <a href="#"
          ><i
            ><font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'twitter' }"/></i
        ></a>
        <a href="#"
          ><i
            ><font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'instagram' }"/></i
        ></a>
        <a href="#"
          ><i
            ><font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'youtube' }"/></i
        ></a>
      </div>
      <p class="copyright">Copyright by Deluxe Squad</p>
    </footer>
    <div class="social">
      <a href="#"
        ><i
          ><font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'facebook' }"/></i
      ></a>
      <a href="#"
        ><i
          ><font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'twitter' }"/></i
      ></a>
      <a href="#"
        ><i
          ><font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'instagram' }"/></i
      ></a>
      <a href="#"
        ><i
          ><font-awesome-icon
            :icon="{ prefix: 'fab', iconName: 'youtube' }"/></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer p {
  font-family: calibri;
}
footer p:nth-child(1) {
  font-size: 30px;
  font-weight: bold;
  color: #191919;
  line-height: 10px;
}
footer p:nth-child(2) {
  font-size: 16px;
  color: #7e7d7d;
  width: 600px;
  text-align: center;
}
footer {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.social-icons a {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e3e3;
  margin: 20px 10px;
  border-radius: 50%;
}
.social-icons {
  display: flex;
}
.social-icons i,
.social i {
  color: #000000;
}
.social-icons a:hover {
  background-color: #000000;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  transition: all ease 0.5s;
}
.social-icons a:hover i,
.social a:hover i {
  color: #ffffff;
  transition: all ease 0.5s;
}

.copyright {
  color: #565555;
  font-size: 12px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.social {
  position: fixed;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
}
.social a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 0px;
  padding: 0px;
  line-height: 0px;
  background-color: #ffffff;
  border: 1px solid #cbcbcb;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}
.social a:hover {
  background-color: #000000;
  transition: all ease 0.5s;
}
.social i {
  font-size: 20px;
  color: #2b2b2b;
}

@media (max-width: 750px) {
  footer p:nth-child(2) {
    width: 90%;
  }
}
</style>
