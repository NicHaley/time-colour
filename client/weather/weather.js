Meteor.startup(function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather(position.coords.latitude + ',' + position.coords.longitude);
	});

	function loadWeather(location) {
	  $.simpleWeather({
	    location: location,
	    woeid: '',
			unit: 'c',
			success: function(weather) {

				html = '<i class="icon-' + weather.code + '"></i> <h6>' + weather.temp + '&deg;' + weather.units.temp + '</h6>';

				$("#weather").html(html);
			},
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
			}
		});
	}
});
