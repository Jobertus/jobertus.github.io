var map;
function initialize() {
  var mapOptions = {
      center: new google.maps.LatLng(51.282560, 4.486434),
      zoom: 12,
      scrollwheel:false,
      zoomControl:false,
      panControl:false,
      rotateControl:false,
      streetViewControl:false,
      mapTypeControl:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);