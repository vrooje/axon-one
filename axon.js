(function(){

	//call the UI page "home"
	//App.load('home');
	App.load('bart-question');

	setInterval(function(){

		//$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/Accelerometer", function( data ) {
		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/GPS", function( data ) {

			$("#sensordata").html(JSON.stringify(data.long));

		});


	}, 5000);


})();
