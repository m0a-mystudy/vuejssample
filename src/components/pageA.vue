<style>
  .yellow {
    color: #f0f;
  }
</style>

<template>
  <h1 class="yellow">apge A</h1>
  <p>
    this page is A!!! not B? ok?
  </p>
  <p>
    msg = {{msg}}
  </p>
  <pre>
    {{items | json 2}}
  </pre>


</template>

<script>
  // webpack.ProvidePluginがないと以下を追加しないとjqueryが使えません
  // var $ = require('jquery');
  module.exports = {
    data: function () {
      return {
        msg: 'yes page A',
        items:''
      }
    },
    ready:function(){
      this.getJson();
    },
    methods: {
      getJson:function(callback){
        var that = this;
        $.ajax({
          type: 'GET',
          crossDomain: true,
          url: 'https://qiita.com/api/v2/items?page=1&per_page=5',
          dataType: 'json',
          success: function(json) {
            that.$data.items = json;
            if(typeof callback === 'function') {
                callback();
            }
          },
          data: null
        });

      }
    }
  }
</script>
