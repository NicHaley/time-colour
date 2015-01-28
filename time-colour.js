Meteor.startup(function() {

  setInterval(function() {

    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    hourColour = Math.round((hour / 23) * 255);

    minuteColour = Math.round((minute / 59) * 255);
    secondColour = Math.round((second / 59) * 255);
    console.log(secondColour);

    $('#time').html(hour + ":" + minute + ":" + second);
    $('.bg-container').css("background-color", "rgb(" + hourColour +", " + minuteColour + ", " + secondColour + ")");

  }, 500);

});