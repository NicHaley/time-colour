Meteor.startup(function() {

  setInterval(function() {

  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  $('#time').html(hour + ":" + minute + ":" + second);
  $('.bg-container').css("background-color", "red");

  }, 500);

});