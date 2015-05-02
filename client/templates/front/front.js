Meteor.startup(function() {

    // $( "input#time.submit" ).focus(function() {
    //     console.log( "Handler for .focus() called." );
    // });
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
        minRotation = (minute / 60 * 360) + (secRotation / 60);
        hourRotation = (hour / 12 * 360) + (minRotation / 12);

        // $('.second').css('-webkit-transform','rotate('+secRotation+'deg)');
        $('.minute').css('-webkit-transform','rotate('+minRotation+'deg)');
        $('.hour').css('-webkit-transform','rotate('+hourRotation+'deg)');   

        $('#time').html(hour + ":" + minute + ":" + second);

        $('.bg-container').css("background-color", "rgb(" + hourColour +", " + minuteColour + ", " + secondColour + ")");
        $('.circle-small').css("border-color", "rgb(" + hourColour +", " + minuteColour + ", " + secondColour + ")");
    }, 500);

});