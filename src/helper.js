import * as $ from "jquery";
export default {
  console: function (data = '') {
    console.log(data)
  },
   GET: function(url, data = {}, success = this.console, error = this.console) {
     let user = localStorage.getItem('capa_user');
     let token = localStorage.getItem('token');
     var getData = {};
     getData.user = user;
     getData.token = token;
     getData.data = data;
  $.ajax({
    url         : url,
    type        : 'GET', // важно!
    data        :  getData,
    cache       : false,
    dataType    : 'json',
    success     : function( respond, status, jqXHR ){
      success(respond);
    },
    error: function( jqXHR, status, errorThrown ){
      error(errorThrown);
    }
  });
},
  POST: function(url, data, success = this.console, error = this.console) {
    let user = localStorage.getItem('capa_user');
    let token = localStorage.getItem('token');
    var postData = {};
    postData.user = user;
    postData.token = token;
    postData.data = data;
    $.ajax({
      url         : url,
      type: 'POST',
      data: postData,
      dataType: 'json',
      success     : function( respond, status, jqXHR ){
        success(respond);
      },
      error: function( jqXHR, status, errorThrown ){
        error(errorThrown);
      }
    });
  },
};

