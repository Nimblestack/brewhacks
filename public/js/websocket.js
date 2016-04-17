$(document).ready(function(){

	function error(err){
		console.log(err);
	}
 	var init = true;
	updateLocation();

	var socket = new WebSocket ("wss://red.api.nimbleparse.com/brewbot");

	// open connection
	socket.onopen = function(event) {
	  socket.innerHTML = 'Connected to: ' + event.currentTarget.URL;
	  socket.className = 'open';
	};


	// closed connection

	socket.onclose = function(event) {
	  socket.innerHTML = 'Disconnected from WebSocket.';
	  socket.className = 'closed';
	  socket = new WebSocket ("wss://red.api.nimbleparse.com/brewbot");
	};

	socket.onmessage = function(event){
		updateLocation();
	};

	function success(position){
		if(!init){
			var message = '{"lat":'+position.coords.latitude + '", "long":'+position.coords.longitude+'"}';
			socket.send(message);
		}else{
			init = false;
		}
	}

	function updateLocation(){
		if (navigator.geolocation) {
	  		navigator.geolocation.getCurrentPosition(success, error);
		} else {
	 		error('not supported');
		}
	}


});

