Meteor.startup(function() {
	$.simpleWeather({
		location: 'Toronto, ON',
		woeid: '',
		unit: 'c',
		success: function(weather) {

			html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';

			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
});