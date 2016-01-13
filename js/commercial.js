var map;
var infowindow = null;


var mapMarkers = {
	"mapPublicWorks": [
		{"name": "Kensington Fire Station", "center": {"lat": 37.908644, "lng": -122.278051}},
		{"name": "Lafayette Chamber of Commerce", "center": {"lat": 37.890238, "lng": -122.121103}},
		{"name": "Chabot Space and Science Center", "center": {"lat": 37.818940, "lng": -122.180661}},
		{"name": "Concord Naval Weapon Station", "center": {"lat": 38.010403, "lng": -121.982449}},
		{"name": "Alcatraz Island", "center": {"lat": 37.827257, "lng": -122.422945}}

	]//,
	// "mapSchools": [
	// 	{"name": "Contra Costa County Office of Education", "center": {"lat": 37.935035, "lng": -122.069851}},
	// 	{"name": "Santa Clara Unified School District", "center": {"lat": 37.357310, "lng": -121.995466}},
	// 	{"name": "Stanley Middle School", "center": {"lat": 37.887376, "lng": -122.113522}}
	// ],
	// "mapChurches": [
	// 	{"name": "St. Andrew Catholic Church", "center": {"lat": 37.676661, "lng": -122.473898}},
	// 	{"name": "Guru Granth Sahib Foundation", "center": {"lat": 37.679680, "lng": -122.065493}},
	// 	{"name": "St. Mina Coptic Church", "center": {"lat": 37.970601, "lng": -122.012505}}
	// ]
};

var mapData = {
	"options": {
	    "center": {"lat": 37.75, "lng": -122.34},
	    "zoom": 10,
	    // "mapTypeId": google.maps.MapTypeId.STREET,//google is not defined yet so this fails
	}
}


var getCategories = function() {
	var categories = [];
	for (var i = 0; i < Object.keys(mapMarkers).length; i++){
		categories.push(Object.keys(mapMarkers)[i]);
	}
	return categories;	
};


var initMap = function() {
	this.cat = getCategories();

	//timeout for error handling
	var googleMapTimeout = setTimeout(function(){
		$(".errorText").text("google maps failed to load");
	}, 8000);


	//for each category, store the map name and draw the map
	for (var i = 0; i < this.cat.length; i++) {
		var mapDiv = document.getElementById(this.cat[i]);
		//draw the empty map for each category
		var bounds = new google.maps.LatLngBounds();
		map = new google.maps.Map(mapDiv, mapData.options);

		//for each location in each category, store the marker info and draw the marker
		for (var j = 0; j < mapMarkers[this.cat[i]].length; j++) {
			var center = mapMarkers[this.cat[i]][j].center;
			var title = mapMarkers[this.cat[i]][j].name;
			var lat = mapMarkers[this.cat[i]][j].center.lat;
			var lng =  mapMarkers[this.cat[i]][j].center.lng;

			var marker = new google.maps.Marker({
				position: center,
				map: map,
				title: title
			});

			marker.addListener('click', function() {
				//focus map to marker
    			map.setZoom(8);
    			map.setCenter(marker.getPosition());

    			//infowindow management
				if (infowindow) {
					infowindow.close();
				}

				infowindow = new google.maps.InfoWindow({
					content: this.title
	  			});

	  			infowindow.open(map, this);
				});
			
			bounds.extend(new google.maps.LatLng(lat, lng));
		}
		map.fitBounds(bounds);
	}

	//error handling
	clearTimeout(googleMapTimeout);
};

