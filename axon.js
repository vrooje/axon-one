var state = "not_answered"

(function(){

	//call the UI page "home"
	App.load('bart-question');
	//App.load('home');

	setInterval(function(){

		//$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Accelerometer", function( data ) {
		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/GPS", function( data ) {

			$("#sensordata").html(JSON.stringify(data));

		});


	}, 2000);


})();
