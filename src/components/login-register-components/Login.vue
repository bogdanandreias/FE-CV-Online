<template>
  <body>
    <div class="cont">
      <div class="form sign-in">
        <h2>Sign In</h2>
        <label>
          <span>Email Address</span>
          <input type="email" v-model="login.email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" v-model="login.password" name="password" />
        </label>
        <button @click="loginUser" class="submit" type="button">Sign In</button>
      </div>

      <div class="sub-cont">
        <div class="img">
          <div class="img-text m-up">
            <h2>New here?</h2>
            <p>Sign up and discover a revolutionary design of portofolios!</p>
          </div>
          <div class="img-text m-in">
            <h2>One of us?</h2>
            <p>
              If you already have an account, just sign in.
            </p>
          </div>
          <div class="img-btn" @click="swapAuth">
            <span class="m-up">Sign Up</span>
            <span class="m-in">Sign In</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>Sign Up</h2>
          <label>
            <span>First Name</span>
            <input type="text" v-model="register.firstName" />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" v-model="register.lastName" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" v-model="register.email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" v-model="register.password" />
          </label>
          <button @click="registerUser" type="button" class="submit">Sign Up Now</button>
        </div>
      </div>
    </div>
  </body>
</template>
<script>

import { useToast } from "vue-toastification";

export default {
  name: "Login",
  data() { 
    return {
      login: {
        email: '',
        password: ''
      },
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
      swapAuth() {
          document.querySelector('.cont').classList.toggle('s-signup')
      },
      loginUser() {
        let api_url = this.$store.state.api_url
        if(this.login.email == '' || this.login.password == '') return this.toast.warning("Fill in all fields.", this.$store.state.toastConfig);

        this.axios.post(api_url + 'user/login', { 
          email: this.login.email,
          password: this.login.password
        }).then(response =>{
            if(response.data.auth == 'true') {
              localStorage.setItem('jwt', response.data.token)
              this.$router.push('/')
              this.toast.success('Login!', this.$store.state.toastConfig);
            } else {
              this.toast.warning("Invalid.", this.$store.state.toastConfig);
            }
        }).catch(err => {
          console.log('err ' + err)
          this.toast.error('Something went wrong', this.$store.state.toastConfig);
        })
      },
      registerUser() {
        console.log(this.register)
        let api_url = this.$store.state.api_url
        if(this.register.email == '' || this.register.password == '' || this.register.firstName == '' || this.register.lastName == '') return this.toast.warning("Fill in all fields.", this.$store.state.toastConfig);

        this.axios.post(api_url + 'user/register', {
          firstName: this.register.firstName,
          lastName: this.register.lastName,
          email: this.register.email,
          password: this.register.password
        }).then(response =>{
            if(response.data.auth == 'true') {
              localStorage.setItem('jwt', response.data.token)
              this.toast.success('Enjoy!', this.$store.state.toastConfig);
              this.$router.push('/')
            } else {
              this.toast.warning("Invalid.", this.$store.state.toastConfig);
            }
        }).catch(err => {
          console.log('err ' + err)
          this.toast.error('Something went wrong', this.$store.state.toastConfig);
        })
      }
  },
  setup() {
    const toast = useToast();
    return { toast }
  }
}
</script>

<style scoped>
*, *:before, *:after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(bottom, #E6E3E3, #ffffff);
  font-family: 'Nunito', sans-serif;
}

input, button{
  border:none;
  outline: none;
  background: none;
}

.cont, .sub-cont {
  border-radius: 10px;
}

.cont{
  overflow: hidden;
  position: relative;
  width: 900px;
  height: 550px;
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.form{
  position: relative;
  width: 640px;
  height: 100%;
  padding: 50px 30px;
  -webkit-transition:-webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

h2{
  width: 100%;
  font-size: 30px;
  text-align: center;
  color: #1A1A1A;
}

label{
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span{
  font-size: 14px;
  font-weight: 600;
  color: #505f75;
  text-transform: uppercase;
}

input{
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(109, 93, 93, 0.4);
  text-align: center;
  font-family: 'Nunito', sans-serif; 
}

button{
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.submit{
  margin-top: 40px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  background: -webkit-linear-gradient(left, #7c7c7c, #8d8c8c);
}

.submit:hover{
  background: -webkit-linear-gradient(left, #8d8c8c, #7c7c7c);
}

.forgot-pass{
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #0c0101;
  cursor: pointer;
}

.forgot-pass:hover{
  color: #403E3E;
}

.sub-cont{
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
}

.cont.s-signup .sub-cont{
  -webkit-transform:translate3d(-640px, 0, 0);
          transform:translate3d(-640px, 0, 0);
}

.img{
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
  border-radius: 10px;
}

.img:before{
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url("https://cottagelife.com/wp-content/uploads/2017/11/AlbertaOlichel.jpg");
  background-size: cover;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img:after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
}

.cont.s-signup .img:before{
  -webkit-transform:translate3d(640px, 0, 0);
          transform:translate3d(640px, 0, 0);
}

.img-text{
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  -webkit-transition:-webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

.img-text h2{
  margin-bottom: 10px;
  font-weight: normal;
}

.img-text p{
  font-size: 14px;
  line-height: 1.5;
}

.cont.s-signup .img-text.m-up{
  -webkit-transform:translateX(520px);
          transform:translateX(520px);
}

.img-text.m-in{
  -webkit-transform:translateX(-520px);
          transform:translateX(-520px);
}

.cont.s-signup .img-text.m-in{
  -webkit-transform:translateX(0);
          transform:translateX(0);
}


.sign-in{
  padding-top: 65px;
  -webkit-transition-timing-function:ease-out;
          transition-timing-function:ease-out;
}

.cont.s-signup .sign-in{
  -webkit-transition-timing-function:ease-in-out;
          transition-timing-function:ease-in-out;
  -webkit-transition-duration:1.2s;
          transition-duration:1.2s; 
  -webkit-transform:translate3d(640px, 0, 0);
          transform:translate3d(640px, 0, 0);
}

.img-btn{
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}

.img-btn:after{
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img-btn span{
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack:center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-transition:-webkit-transform 1.2s;
  transition: -webkit-transform 1.2s;
  transition: transform 1.2s;
  transition: transform 1.2s, -webkit-transform 1.2s;;
}

.img-btn span.m-in{
  -webkit-transform:translateY(-72px);
          transform:translateY(-72px);
}

.cont.s-signup .img-btn span.m-in{
  -webkit-transform:translateY(0);
          transform:translateY(0);
}

.cont.s-signup .img-btn span.m-up{
  -webkit-transform:translateY(72px);
          transform:translateY(72px);
}

.sign-up{
  -webkit-transform:translate3d(-900px, 0, 0);
          transform:translate3d(-900px, 0, 0);
}

.cont.s-signup .sign-up{
  -webkit-transform:translate3d(0, 0, 0);
          transform:translate3d(0, 0, 0);
}
</style>