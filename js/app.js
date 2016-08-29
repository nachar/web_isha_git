$( document ).ready(function() {
	hamburguer();
	bLazyImg();
	sliderChangeListener();

	// mapa
	iniciarMapa();
});
/********************* General **********************/
function hamburguer() {
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
}
function sliderChangeListener (){
	$('#myCarousel').bind('slide.bs.carousel', function (e) {
		bLazyImg();
	});
}
function bLazyImg (){
	window.bLazy = new Blazy({
		offset: 0,
		success: function(ele){
			//TODO: Hacer algo cuando terminé de cargar imagenes
		}
		, error: function(ele, msg){
			if(msg === 'missing'){
				console.log("b-lazy ERROR: missing");
			}
			else if(msg === 'invalid'){
				console.log("b-lazy ERROR: invalid");
			}
		},
		breakpoints: [{
			width: 767 // max-width
			, src: 'data-src-small'
		}
		, {
			width: 991 // max-width
			, src: 'data-src-medium'
		}]
	});
}

function iniciarMapa() {
	var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"administrative","elementType":"labels","stylers":[{"saturation":"-100"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"gamma":"0.75"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"-37"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f9f9f9"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"40"},{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"saturation":"-100"},{"lightness":"-37"}]},{"featureType":"landscape.natural","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":"100"},{"weight":"2"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"saturation":"-100"},{"lightness":"0"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"lightness":"-4"},{"saturation":"-100"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"},{"visibility":"on"},{"saturation":"-95"},{"lightness":"62"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road","elementType":"labels","stylers":[{"saturation":"-100"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"gamma":"0.50"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"gamma":"0.50"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"-13"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"lightness":"0"},{"gamma":"1.09"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"},{"saturation":"-100"},{"lightness":"47"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"lightness":"-12"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"},{"lightness":"77"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"-5"},{"saturation":"-100"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-15"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"lightness":"47"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"water","elementType":"geometry","stylers":[{"saturation":"53"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-42"},{"saturation":"17"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":"61"}]}];
	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		var mapOptions = {
			zoom: 16,
			scrollwheel: false,
			center: new google.maps.LatLng(-33.388348, -70.546134),
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		var map = new google.maps.Map(document.getElementById('map'),
		mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		var marker = new google.maps.Marker({
			position: {lat: -33.388348, lng: -70.546134},
			title:"Presidente Kennedy 9070 of 501"
		});

		marker.setMap(map);
	}
