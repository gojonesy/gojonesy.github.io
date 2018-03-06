new Vue({
  el: '#vue-app',
  data:{
    output: "Your fave food"
  },
  methods:{
    readRefs:function(){
      this.output = this.$refs.input.value;
    },
  }
});
