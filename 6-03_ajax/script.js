'use strict';

$(document).ready(function(){
  $.ajax({url: 'data.json', dataType: 'json'})
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });
});