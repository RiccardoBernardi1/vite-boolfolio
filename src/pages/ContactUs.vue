<template>
  <div class="container">
    <h2 class="mt-4">Contact Us</h2>
    <form @submit.prevent="sendEmail()">
      <div class="mt-3">
        <label for="name">Name</label>
        <input
          class="form-control"
          id="name"
          type="text"
          placeholder="Insert your name"
          v-model="formData.name"
        />
      </div>
      <div class="mt-3">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          type="email"
          placeholder="Insert your email"
          v-model="formData.email"
        />
      </div>
      <div class="mt-3">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          cols="30"
          rows="10"
          placeholder="Insert the message*"
          v-model="formData.message"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary mt-3">
        Send Request
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AboutUs",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      axios
        .post(`http://localhost:8000/api/contact-form`, {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h2{
  color: white;
}
</style>