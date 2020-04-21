function init(){
	var el = document.getElementById('map');
	var myLocation = new google.maps.Map(documnet, {
	center: {lat: 41.835117, lng: -87.627130};
	var mapOptions = {
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOPtions: {
			position: google.maps.ControlPosition.Bottom_CENTER
		});
	}
}
	
	
google.mpas.event.addDomListener(window, 'load', init);
