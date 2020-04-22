function init(){
	var el = document.getElementById('map');
	var taipei = new google.maps.LatLng(25.026297, 121.561269);
	var mapOptions = {
		center: taipei,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: taipei,
		map: myMap,
		animation: google.maps.Animation.DROP,

	});

	var contentString = '<h2>Taipei City</h2>;

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);
