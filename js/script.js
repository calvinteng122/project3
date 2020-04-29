function initMap() {
        var taipei = {lat: 25.034880, lng: 121.565231};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: taipei
        });

        var marker = new google.maps.Marker({
          position: taipei,
          map: map,
		  animation: google.maps.Animation.DROP,
		  title: 'Uluru (Ayers Rock)'
        });
}
//slide show
var myIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slide, 3000); 
}
