function initMap() {
  var location = {lat: 41.831602, lng: -87.627231};
  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		mapTypeControlOPtions: {
			position: google.maps.ControlPosition.Bottom_CENTER
		});
	  var marker = new google.maps.Marker({position: location, map: map});
}
	
google.mpas.event.addDomListener(window, 'load', init);
