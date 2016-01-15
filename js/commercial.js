
var map;
var infowindow = null;


var mapMarkers = {
	"publicWorks": [
		{"name": "Kensington Fire Station", 
		"center": {"lat": 37.908644, "lng": -122.278051}, 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Lafayette Chamber of Commerce", 
		"center": {"lat": 37.890238, "lng": -122.121103}, 
		"img": "img/HumanCoImages/pastProjects/alcatraz.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Chabot Space and Science Center", 
		"center": {"lat": 37.818940, "lng": -122.180661}, 
		"img": "img/HumanCoImages/pastProjects/chabot.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Concord Naval Weapon Station", 
		"center": {"lat": 38.010403, "lng": -121.982449}, 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Alcatraz Island", 
		"center": {"lat": 37.827257, "lng": -122.422945}, 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"blurb": "description of work done at this site"}

	],
	"schools": [
		{"name": "Contra Costa County Office of Education", 
		"center": {"lat": 37.935035, "lng": -122.069851}, 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Santa Clara Unified School District", 
		"center": {"lat": 37.357310, "lng": -121.995466}, 
		"img": "img/HumanCoImages/pastProjects/santaClara.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Stanley Middle School", 
		"center": {"lat": 37.887376, "lng": -122.113522}, 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"blurb": "description of work done at this site"},

		{"name": "Happy Valley School", 
		"center": {"lat": 37.904952, "lng": -122.142410}, 
		"img": "img/HumanCoImages/pastProjects/happyValley.jpg",
		"blurb": "description of work done at this site"}
	],
	"churches": [
		{"name": "St. Andrew Catholic Church", 
		"center": {"lat": 37.676661, "lng": -122.473898}, 
		"img": "img/HumanCoImages/pastProjects/stAndrews.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "Guru Granth Sahib Foundation", 
		"center": {"lat": 37.679680, "lng": -122.065493}, 
		"img": "img/HumanCoImages/pastProjects/guruGranth.jpg",
		"blurb": "description of work done at this site"},
		
		{"name": "St. Mina Coptic Church", 
		"center": {"lat": 37.970601, "lng": -122.012505}, 
		"img": "img/HumanCoImages/pastProjects/LOPC.jpg",
		"blurb": "description of work done at this site"},

		{"name": "St John Vianney Catholic Church", 
		"center": {"lat": 37.919448, "lng": -122.043034}, 
		"img": "img/HumanCoImages/pastProjects/stAndrews.jpg",
		"blurb": "description of work done at this site"}
	]
};

var mapData = {
	"mapName": ["mapPublicWorks", "mapSchools", "mapChurches"],//jquery object div names
	"options": {
	    "center": {"lat": 37.75, "lng": -122.34},
	    "zoom": 10,
	}
};

var initSettings = {
	"headings": ["publicWorksHeader", "schoolsHeader", "churchesHeader"],//jquery object id names
	"numInShowcase": 3
}


var initPage = function() {
	//set three thumbnails per section heading
	makeThumbnail(initSettings.headings, initSettings.numInShowcase);
	//set one map per section heading/with markers
	initMap();
};


var initMap = function() {
	this.cat = getCategories();

	//timeout for error handling
	var googleMapTimeout = setTimeout(function(){
		$(".errorText").text("google maps failed to load");
	}, 8000);


	//for each category, store the map name and draw the map
	for (var i = 0; i < this.cat.length; i++) {
		var mapDiv = document.getElementById(mapData.mapName[i]);
		//draw the empty map for each category
		var bounds = new google.maps.LatLngBounds();
		map = new google.maps.Map(mapDiv, mapData.options);

		//for each location in each category, store the marker info and draw the marker
		for (var j = 0; j < mapMarkers[this.cat[i]].length; j++) {
			var center = mapMarkers[this.cat[i]][j].center;
			var title = mapMarkers[this.cat[i]][j].name;
			var lat = mapMarkers[this.cat[i]][j].center.lat;
			var lng =  mapMarkers[this.cat[i]][j].center.lng;

			//add markers
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

	  			infowindow.open(this.map, this);
				});
			
			bounds.extend(new google.maps.LatLng(lat, lng));
		}
		map.fitBounds(bounds);
	}
	//error handling
	clearTimeout(googleMapTimeout);
};


var getCategories = function() {
	var categories = [];
	for (var i = 0; i < Object.keys(mapMarkers).length; i++){
		categories.push(Object.keys(mapMarkers)[i]);
	}
	return categories;	
};

//attachmentPointList: array of 3 jquery #id objects. use null to skip a section. order: publicWorks, School, Church
//numPerHeading: integer will do (number of thumbnails per section)
//clickInfo: send "true" if this function was called from a click
var makeThumbnail = function(attachmentPointList, numPerHeading, clickInfo) {


	for (var i = 0; i < attachmentPointList.length; i++) {//# of section headings
		if (clickInfo) {
			var j = initSettings.numInShowcase;//used to stop the repeating when 'more' button is pushed
		}else{
			var j = 0;
		}
		for (j; j < numPerHeading; j++) {//# of thumbnails per section
			//create elements for generic thumbnail
			var divTop = document.createElement("DIV");
			divTop.classList.add("col-sm-4");
			var divThumb = document.createElement("DIV");
			divThumb.classList.add("thumbnail");
			var img = document.createElement("IMG");
			var divCapt = document.createElement("DIV");
			divCapt.classList.add("caption");
			var title = document.createElement("H3");
			var desc = document.createElement("P");
			desc.classList.add("thumb-description");
			//construct generic thumbnail
			divThumb.appendChild(img);
			divThumb.appendChild(divCapt);
			divCapt.appendChild(title);
			divCapt.appendChild(desc);
			divTop.appendChild(divThumb);
			
			//specifics per thumbnail
			if (i == 0) {//publicWorks
				img.src = mapMarkers.publicWorks[j].img;
				img.alt = mapMarkers.publicWorks[j].name;
				title.innerHTML = mapMarkers.publicWorks[j].name;
				desc.innerHTML = mapMarkers.publicWorks[j].blurb;

			} else if (i == 1) {//schools
				img.src = mapMarkers.schools[j].img;
				img.alt = mapMarkers.publicWorks[j].name;
				title.innerHTML = mapMarkers.schools[j].name;
				desc.innerHTML = mapMarkers.schools[j].blurb;

			} else if (i == 2) {//churches
				img.src = mapMarkers.churches[j].img;
				img.alt = mapMarkers.publicWorks[j].name;
				title.innerHTML = mapMarkers.churches[j].name;
				desc.innerHTML = mapMarkers.churches[j].blurb;
			}

			//append generic thumbnail
			$("#"+attachmentPointList[i]).append(divTop);
		}
	}
};
var moreButton = function(clicked_id) {//id of button (section heading) being sent from DOM when clicked
	//var j = numInShowcase; //so the first three don't repeat - used in makeThumbnail()

	var attachmentPointList = ["publicWorksShowMore", "schoolsShowMore", "churchesShowMore"];
	var numPerHeading = Math.min(mapMarkers.publicWorks.length, mapMarkers.schools.length, mapMarkers.churches.length);
	var clickTrue = true;

	//force attachmentPointList to work like an array
	if (attachmentPointList[0].indexOf(clicked_id) > -1) {
		attachmentPointList = ["publicWorksShowMore", null, null];
		if ($("#publicWorks").text() == "show more") {
			$("#publicWorks").text("show less");
		} else {
			$("#publicWorks").text('show more');
		}
	} else if (attachmentPointList[1].indexOf(clicked_id) > -1) {
		attachmentPointList = [null, "schoolsShowMore", null];
		if ($("#school").text() == "show more") {
			$("#school").text("show less");
		} else {
			$("#school").text('show more');
		}
	} else if (attachmentPointList[2].indexOf(clicked_id) > -1) {
		attachmentPointList = [null, null, "churchesShowMore"];
		if ($("#church").text() == "show more") {
			$("#church").text("show less");
		} else {
			$("#church").text('show more');
		}
	}


	
	makeThumbnail(attachmentPointList, numPerHeading, clickTrue);
	//TODO: if church button- scroll to bottom
	//TODO: make see more button only create one set of thumbnails.
};


