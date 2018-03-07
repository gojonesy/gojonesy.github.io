<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <hr />
    <h2>Project Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <hr />
    <my-ip></my-ip>
  </div>
</template>

<script>
import myIP from './components/myIP.vue'

export default {
  components: {
    'my-ip': myIP
  },
  name: 'app',
  data () {
    return {
      msg: 'GoJonesy Vue Pages.'
    }
  }
}
</script>

<style>

</style>
