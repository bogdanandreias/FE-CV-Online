<template>
  <div class="wrapper">
    <h2>Edit CV</h2>
    <div id="error_message"></div>
    <form id="myform">
      <p>Details</p>
      <div class="input_field">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          v-model="firstName"
          required
        />
      </div>
      <div class="input_field">
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          v-model="lastName"
          required
        />
      </div>
      <div class="input_field">
        <input
          type="text"
          placeholder="Occupation"
          id="occupation"
          v-model="occupation"
          required
        />
      </div>
      <div class="input_field">
        <textarea
          placeholder="About"
          id="about"
          v-model="about"
          required
        ></textarea>
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 1</p>
        <input
          type="text"
          placeholder="Skill 1"
          id="skill1"
          v-model="skill1"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill1_description"
          v-model="skill1_description"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 2</p>
        <input
          type="text"
          placeholder="Skill 2"
          id="skill2"
          v-model="skill2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill2_description"
          v-model="skill2_description"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Skill 3</p>
        <input
          type="text"
          placeholder="Skill 3"
          id="skill3"
          v-model="skill3"
          required
        />
        <input
          type="text"
          placeholder="Description"
          id="skill3_description"
          v-model="skill3_description"
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
          v-model="facebook"
          required
        />
        <input
          type="text"
          placeholder="instagram"
          id="instagram"
          v-model="instagram"
          required
        />
        <input
          type="text"
          placeholder="linkedin"
          id="linkedin"
          v-model="linkedin"
          required
        />
        <input
          type="text"
          placeholder="twitter"
          id="twitter"
          v-model="twitter"
          required
        />
      </div>
      <hr />
      <div class="input_field">
        <p>Photo</p>
        <input type="file" id="photo" required />
      </div>
      <hr />
      <div class="input_field">
        <p>Upload Cv</p>
        <input type="file" id="cv" required />
      </div>
      <div class="btn">
        <button @click.prevent="validate()">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      occupation: "",
      about: "",
      skill1: "",
      skill1_description: "",
      skill2: "",
      skill2_description: "",
      skill3: "",
      skill3_description: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    };
  },
  methods: {
    validate() {
      var error_message = document.getElementById("error_message");

      error_message.style.padding = "10px";

      var text;
      if (this.firstName.length < 5 || this.lastName < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
      }
      if (this.about.length < 10) {
        text = "Please Enter a longer About Description";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
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
