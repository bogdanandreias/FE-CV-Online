<template>
  <div class="wrapper">
    <h2>Edit CV</h2>
    <div id="error_message"></div>
    <form id="myform" v-if='defaultUser.firstName != ""'>
      <p>Details</p>
      <div class="input_field">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          v-model="defaultUser.firstName"
          required
        />
      </div>
      <div class="input_field">
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          v-model="defaultUser.lastName"
          required
        />
      </div>
      <div class="input_field">
        <input
          type="text"
          placeholder="Occupation"
          id="occupation"
          v-model="defaultUser.cv.occupation"
          required
        />
      </div>
      <div class="input_field">
        <textarea
          placeholder="About"
          id="about"
          v-model="defaultUser.cv.about"
          required
        ></textarea>
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 1</p>
        <input
          type="text"
          placeholder="Title"
          id="skill1"
          v-model="defaultUser.cv.skill1.title"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill1_description"
          v-model="defaultUser.cv.skill1.description"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 2</p>
        <input
          type="text"
          placeholder="Title"
          id="skill2"
          v-model="defaultUser.cv.skill2.title"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill2_description"
          v-model="defaultUser.cv.skill2.description"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 3</p>
        <input
          type="text"
          placeholder="Title"
          id="skill3"
          v-model="defaultUser.cv.skill3.title"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill3_description"
          v-model="defaultUser.cv.skill3.description"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Social Media</p>
        <input
          type="text"
          placeholder="facebook"
          id="facebook"
          v-model="defaultUser.social.facebook"
          required
        />
        <input
          type="text"
          placeholder="instagram"
          id="instagram"
          v-model="defaultUser.social.instagram"
          required
        />
        <input
          type="text"
          placeholder="youtube"
          id="youtube"
          v-model="defaultUser.social.youtube"
          required
        />
        <input
          type="text"
          placeholder="twitter"
          id="twitter"
          v-model="defaultUser.social.twitter"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Photo</p>
        <input @change="onImageSelected" type="file" id="photo" required />
      </div>
      <hr />
      <div class="input_field">
        <p>Upload Cv</p>
        <input @change="onPdfSelected" type="file" id="cv" required />
      </div>
    </form>
    <div class="btn">
      <button @click="submitForm()">SUBMIT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  data() {
    return {
      defaultUser: {
        imageInfo: null,
        pdfInfo: null,
        firstName: "",
        lastName: "",
        cv: {
          occupation: "",
          about: "",
          skill1: {
            title: "",
            description: "",
          },
          skill2: {
            title: "",
            description: "",
          },
          skill3: {
            title: "",
            description: "",
          },
        },
        social: {
          facebook: "",
          twitter: "",
          instagram: "",
          youtube: "",
        }
      },
    };
  },
  created() {
    this.getUserInfo()
  },
  computed: {
  },
  methods: {
    onImageSelected(event) {
      this.defaultUser.imageInfo = event.target.files[0]
    },
    onPdfSelected(event) {
      this.defaultUser.pdfInfo = event.target.files[0]
    },
    getUserInfo () {
      this.axios.get(this.$store.state.api_url + 'user/info', { headers: { token: localStorage.getItem('jwt')}})
      .then(({data}) => {
        this.defaultUser = data
        this.$store.commit('updateUser', data)
      })
      .catch(err => {
        if(err) throw err
      })
    },
    submitForm() {
      let formData = new FormData()
      console.log(this.defaultUser.firstName)
      formData.append('firstName', this.defaultUser.firstName)
      formData.append('lastName', this.defaultUser.lastName)
      formData.append('image', this.defaultUser.imageInfo)
      formData.append('pdf', this.defaultUser.pdfInfo)
      formData.append('cv', JSON.stringify(this.defaultUser.cv))
      formData.append('social', JSON.stringify(this.defaultUser.social))
      this.axios.put(this.$store.state.api_url + 'user/info', formData, { headers: { token: localStorage.getItem('jwt')}})
          .then(response => {
            console.log(response)
            alert("changes have been made")
          })
          .catch(err => {
            console.log(err)
            alert("err", err)
            if(err) throw err
          })
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Josefin Sans", sans-serif;
}

p {
  font-family: "Josefin Sans", sans-serif;
  margin: 5px;
}

.wrapper {
  margin-top: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 4px 4px 2px #e6e3e3;
}

.wrapper h2 {
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #332902;
}

.wrapper .input_field {
  margin-bottom: 10px;
}

.wrapper .input_field input[type="text"],
.wrapper textarea {
  border: 1px solid #e0e0e0;
  width: 100%;
  padding: 10px;
}

.wrapper textarea {
  resize: none;
  height: 80px;
}

.wrapper .btn button {
  border: 0px;
  margin-top: 15px;
  padding: 10px;
  text-align: center;
  width: 100%;
  background: #e6e3e3;
  color: #332902;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
}

#error_message {
  margin-bottom: 20px;
  background: #fe8b8e;
  padding: 0px;
  text-align: center;
  font-size: 14px;
  transition: all 0.5s ease;
}

hr {
  margin-bottom: 0.5em;
}
</style>
