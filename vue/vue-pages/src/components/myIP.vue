<template>
  <div class="">
    <h1>Your IP is {{ ip }}</h1>
    <input type="text" v-model="input.firstname" placeholder="First Name"  />
    <input type="text" v-model="input.lastname" placeholder="Last Name" />
    <button class="btn btn-primary" v-on:click="sendData()">Send</button>
    <br />
    <br />
    <textarea>{{ response }}</textarea>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'my-ip',
  data () {
    return {
      ip: "",
      input: {
        firstname: "",
        lastname: ""
      },
      response: ""
    }
  },
  mounted() {
    axios({ method: "GET", "url": "https://httpbin.org/ip" }).then(result => {
      this.ip = result.data.origin;
    }, error => {
      console.error(error);
    });
  },
  methods: {
    sendData() {
      axios({ method: "POST", "url": "https://httpbin.org/post", "data": this.input, "headers": {"content-type": "application/json" } }).then(result => {
        this.response = result.data;
      }, error => {
        console.error(error);
      });
    }
  },
}
</script>

<style>

</style>
