Meteor.startup(function() {
	$.simpleWeather({
		location: 'Toronto, ON',
		woeid: '',
		unit: 'f',
		success: function(weather) {
			html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
});