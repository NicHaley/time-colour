Meteor.startup(function() {

  setInterval(function() {

    function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
    }

    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    minute = checkTime(minute);
    second = checkTime(second);

    hourColour = Math.round((hour / 23) * 255);
    minuteColour = Math.round((minute / 59) * 255);
    secondColour = Math.round((second / 59) * 255);

    secRotation = second / 60 * 360;

    $('.second').css('-webkit-transform','rotate('+secRotation+'deg)'); 

    $('#time').html(hour + ":" + minute + ":" + second);
    $('#rgb-colour').html("(" + hourColour + ", " + minuteColour + ", " + secondColour + ")");

    $('.bg-container').css("background-color", "rgb(" + hourColour +", " + minuteColour + ", " + secondColour + ")");
  }, 500);

});