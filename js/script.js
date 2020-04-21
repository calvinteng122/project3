function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.831602, lng: -87.627231};
		zoom: 8
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions:{
			position: google.maps.ControlPosition.BOttom_CENTER
		}
		};
}
	
google.mpas.event.addDomListener(window, 'load', init);
