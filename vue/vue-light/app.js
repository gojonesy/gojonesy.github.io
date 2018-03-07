var myComponent = {
  template: '<h2>A custom statement!</h2',
  data: {
    message: 'Good Afternoon'
  },
  methods: {

  }
}

new Vue ({
  el:'#vue-app',
  components: {
    'my-component': myComponent
  },
  data() {
    return {
      msg: 'Good Afternoon'
    }
  },
  methods: {

  }

});
