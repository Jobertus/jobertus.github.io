$(document).ready(function() {
    $(".fancy_title").lettering();
});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});


$(document).foundation();

function initialize() {
var map_canvas = document.getElementById('map_canvas');
var map_options = {
  center: new google.maps.LatLng(51.460697, 4.442957),
  zoom: 16,
  scrollwheel:false,
  zoomControl:false,
  panControl:false,
  rotateControl:false,
  streetViewControl:false,
  mapTypeControl:false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var iwMaxWidth = 350;

var map = new google.maps.Map(map_canvas, map_options);
var image = '/imgs/logoicon.png';
var myLatLng = new google.maps.LatLng(51.459239, 4.443064);
var beachMarker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  icon: image
});
var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading"> Sportpark Hemelrijk</h2>'+
      '<div id="bodyContent">'+
      '<p> Moerkantsebaan 34 2910 Essen </p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
infowindow.open(map,beachMarker);
google.maps.event.addListener(beachMarker, 'click', function() {
    infowindow.open(map,beachMarker);
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);