
var map;
var infowindow = null;


var mapMarkers = {
	"publicWorks": [
		{"name": "City of Lafayette", 
		"center": {"lat": 37.895141, "lng":  -122.116421}, 
		"img": "img/thumbnails/publicWorks/lafayette.jpg"},

		{"name": "City of Concord", 
		"center": {"lat": 37.972443, "lng": -122.009801}, 
		"img": "img/thumbnails/publicWorks/concord.jpg"},

		{"name": "City of Orinda", 
		"center": {"lat": 37.884253, "lng": -122.176057}, 
		"img": "img/thumbnails/publicWorks/orinda.jpg"},

		{"name": "City of Emeryville", 
		"center": {"lat": 37.839561, "lng": -122.289188}, 
		"img": "img/thumbnails/publicWorks/emeryville.jpg"},

		{"name": "Kensington Fire Station", 
		"center": {"lat": 37.908644, "lng": -122.278051}, 
		"img": "img/thumbnails/publicWorks/kensington.jpg"},
		
		{"name": "Lafayette Chamber of Commerce", 
		"center": {"lat": 37.890238, "lng": -122.121103}, 
		"img": "img/thumbnails/publicWorks/lafayetteChamberOfCommerce.jpg"},
		
		{"name": "Chabot Space and Science Center", 
		"center": {"lat": 37.818940, "lng": -122.180661}, 
		"img": "img/thumbnails/publicWorks/chabot.jpg"},
		
		{"name": "Concord Naval Weapon Station", 
		"center": {"lat": 38.010403, "lng": -121.982449}, 
		"img": "img/thumbnails/publicWorks/navalWeapons.jpg"},
		
		{"name": "Alcatraz Island", 
		"center": {"lat": 37.827257, "lng": -122.422945}, 
		"img": "img/thumbnails/publicWorks/alcatraz.jpg"},

		{"name": "Lafayette Reservoir", 
		"center": {"lat": 37.881981, "lng": -122.142629}, 
		"img": "img/thumbnails/publicWorks/lafayetteReservoir.jpg"},

		{"name": "Emeryville Police Station", 
		"center": {"lat": 37.837072, "lng": -122.303913}, 
		"img": "img/thumbnails/publicWorks/emeryvillePoliceStation.jpg"},

		{"name": "City of Pleasant Hill", 
		"center": {"lat": 37.953088, "lng": -122.076173}, 
		"img": "img/thumbnails/publicWorks/pleasantHill.jpg"},

		{"name": "City of San Ramon", 
		"center": {"lat": 37.779630, "lng": -121.937097}, 
		"img": "img/thumbnails/publicWorks/sanRamon.jpg"},

		{"name": "City of San Mateo", 
		"center": {"lat": 37.542923, "lng": -122.3112967}, 
		"img": "img/thumbnails/publicWorks/sanMateo.jpg"},

		{"name": "City of Mountain View", 
		"center": {"lat": 37.405435, "lng": -122.0872197}, 
		"img": "img/thumbnails/publicWorks/mountainView.jpg"},

		{"name": "Concord Pavilion", 
		"center": {"lat": 37.959197, "lng": -121.938146}, 
		"img": "img/thumbnails/publicWorks/concordPavilion.jpg"},

		{"name": "Pleasant Hill Police Department", 
		"center": {"lat": 37.962284, "lng": -122.068980}, 
		"img": "img/thumbnails/publicWorks/pleasantHillPoliceDepartment.jpg"}

	],
	"schools": [
		{"name": "Contra Costa County Office of Education", 
		"center": {"lat": 37.935035, "lng": -122.069851},
		"img": "img/thumbnails/schools/cccEducation.jpg"},
		
		{"name": "Santa Clara Unified School District", 
		"center": {"lat": 37.3956057, "lng": -122.0469593},
		"img": "img/thumbnails/schools/santaClaraUnified.jpg"},
		
		{"name": "Stanley Middle School", 
		"center": {"lat": 37.887376, "lng": -122.113522}, 
		"img": "img/thumbnails/schools/stanleyMiddleSchool.jpg"},

		{"name": "Happy Valley School", 
		"center": {"lat": 37.904749, "lng": -122.142367}, 
		"img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Burton Valley School", 
		"center": {"lat": 37.862528, "lng": -122.093597}, 
		"img": "img/thumbnails/schools/burton.jpg"},

		{"name": "Dahl Elementary", 
		"center": {"lat": 37.288519, "lng": -121.839535}, 
		"img": "img/thumbnails/schools/dahl.jpg"},

		{"name": "Walnut Creek School District", 
		"center": {"lat": 37.908848, "lng": -122.055817}, 
		"img": "img/thumbnails/schools/walnutCreekUnified.jpg"},

		{"name": "Palomares School", 
		"center": {"lat": 37.695180, "lng": -122.025352}, 
		"img": "img/thumbnails/schools/palomares.jpg"},

		// {"name": "Parkside School", 
		// "center": {"lat": 37.288519, "lng": -121.839535}, 
		// "img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Green Valley Elementary School", 
		"center": {"lat": 37.833208, "lng": -121.979520}, 
		"img": "img/thumbnails/schools/greenValley.jpg"},

		{"name": "UC Berkeley-Animal Care", 
		"center": {"lat": 37.870036, "lng": -122.268538}, 
		"img": "img/thumbnails/schools/berkeley.jpg"},

		{"name": "Carlmont High School", 
		"center": {"lat": 37.505269, "lng": -122.288827}, 
		"img": "img/thumbnails/schools/carlmont.jpg"},

		{"name": "Greenbrook School", 
		"center": {"lat": 37.791232, "lng": -121.974216}, 
		"img": "img/thumbnails/schools/greenbrook.jpg"},

		{"name": "Martin Luther King Middle School", 
		"center": {"lat": 37.881670, "lng": -122.278132}, 
		"img": "img/thumbnails/schools/mlk.jpg"},

		{"name": "Las Lomas High School", 
		"center": {"lat": 37.890369, "lng": -122.056258}, 
		"img": "img/thumbnails/schools/lasLomas.jpg"},

		// {"name": "Neil Armstrong Middle School", 
		// "center": {"lat": 37.288519, "lng": -121.839535}, 
		// "img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Hillsdale High School", 
		"center": {"lat": 37.532872, "lng": -122.309776}, 
		"img": "img/thumbnails/schools/hillsdale.jpg"},

		// {"name": "Twain Harte Elementary", 
		// "center": {"lat": 37.288519, "lng": -121.839535}, 
		// "img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Family Early Learning Center", 
		"center": {"lat": 37.351011, "lng": -121.873100}, 
		"img": "img/thumbnails/schools/familyEarlyLearning.jpg"},

		{"name": "Campolindo High School", 
		"center": {"lat": 37.288519, "lng": -121.839535}, 
		"img": "img/thumbnails/schools/campolindo.jpg"},

		{"name": "La Paloma High School", 
		"center": {"lat": 37.920269, "lng": -121.681303}, 
		"img": "img/thumbnails/schools/paloma.jpg"},

		// {"name": "Powers Childcare", 
		// "center": {"lat": 37.288519, "lng": -121.839535}, 
		// "img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Diablo Valley College Footbridge",
		"center": {"lat": 37.968297, "lng": -122.071860}, 
		"img": "img/thumbnails/schools/dvcFootbridge.jpg"},

		{"name": "Foothill High School", 
		"center": {"lat": 37.671990, "lng": -121.918279}, 
		"img": "img/thumbnails/schools/foothillHighSchool.jpg"},

		// {"name": "Curtis Jr. High School", 
		// "center": {"lat": 37.288519, "lng": -121.839535}, 
		// "img": "img/thumbnails/schools/happyValley.jpg"},

		{"name": "Ceasar Chavez Middle School", 
		"center": {"lat": 37.641812, "lng": -122.023127}, 
		"img": "img/thumbnails/schools/cesarChavez.jpg"}

	],
	"churches": [
		{"name": "St. Andrew Catholic Church", 
		"center": {"lat": 37.676661, "lng": -122.473898}, 
		"img": "img/thumbnails/churches/saintAndrews.jpg"},
		
		{"name": "Guru Granth Sahib Foundation", 
		"center": {"lat": 37.679680, "lng": -122.065493}, 
		"img": "img/thumbnails/churches/guruGranth.jpg"},
		
		{"name": "St. Mina Coptic Church", 
		"center": {"lat": 37.970601, "lng": -122.012505}, 
		"img": "img/thumbnails/churches/LOPC.jpg"},

		{"name": "St John Vianney Catholic Church", 
		"center": {"lat": 37.919448, "lng": -122.043034}, 
		"img": "img/thumbnails/churches/saintAndrews.jpg"},

		{"name": "Our Savior Lutheran Church", 
		"center": {"lat": 37.671003, "lng": -121.752874}, 
		"img": "img/thumbnails/churches/saintAndrews.jpg"},

		{"name": "St. Perpetua Catholic Church", 
		"center": {"lat": 37.881331, "lng": -122.113344}, 
		"img": "img/thumbnails/churches/saintAndrews.jpg"}
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
	"headings": ["publicWorksThumbs", "schoolsThumbs", "churchesThumbs"],//jquery object id names
	"numInShowcase": 4
}


var initCommercialPage = function() {
	//set three thumbnails per section heading
	makeCommercialThumbnail(initSettings.headings, initSettings.numInShowcase);
	//set one map per section heading/with markers
	initCommercialMap();
};


var initCommercialMap = function() {
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
				var content = this.title;

				//connect marker to thumbnail
				highlightThumbnail(content);

				//focus map to marker
    			map.setZoom(8);
    			map.setCenter(marker.getPosition());

    			//infowindow management
				if (infowindow) {
					infowindow.close();
				}

				infowindow = new google.maps.InfoWindow({
					content: content
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

//if the mapMarker is clicked, make a blue outline around the corresponding thumbnail
var highlightThumbnail = function(markerName) {
	var eventClick = document.createElement("div");//to placate toggleThumbnails function
	var clicked_id;
	var moreButtonPushed = false;

	//clear any blue outlines
	$("h4").parent().parent().parent().removeClass( "thumbnailHighlight" );

	//traverse JSON
	for (var i = 0; i < getCategories().length; i++) {
		var category = getCategories()[i];
		for (var j = 0; j < mapMarkers[category].length; j++) {
			if (mapMarkers[category][j].name == markerName) {
				var clicked_id = Object.keys(mapMarkers)[i];
				//make or show the thumbnails
				//function requires: (clicked_id, moreButtonPushed, eventClick)
				toggleThumbnails(clicked_id, moreButtonPushed, eventClick);

				//manually open the section (since the button wasn't physically pushed)
				if (moreButtonPushed == false) {
					$("#"+clicked_id+"ShowMore").addClass("in");
					moreButtonPushed = true;
				}
			}
		}
	}
	//highlight the thumbnail blue
	$("h4:contains("+markerName+")").parent().parent().parent().addClass( "thumbnailHighlight" );
	setTimeout(function() { 
		$("h4:contains("+markerName+")").parent().parent().parent().removeClass( "thumbnailHighlight" );
	}, 
	2000);
	return moreButtonPushed;
};


//helper function for traversing JSON
var getCategories = function() {
	var categories = [];
	for (var i = 0; i < Object.keys(mapMarkers).length; i++){
		categories.push(Object.keys(mapMarkers)[i]);
	}
	return categories;	
};


var makeCommercialThumbnail = function(attachmentPoints, numPerHeading, clickInfo) {
//attachmentPoints: array of 3 jquery #id objects. use '' to skip a section. order: publicWorks, School, Church
//numPerHeading: integer (number of thumbnails per section)
//clickInfo: send "true" if this function was called from a click (instead of initial page load)

	for (var i = 0; i < attachmentPoints.length; i++) {//# of section headings
		if (clickInfo) {
			//if thumbnails are created through button pushing, don't re-create the first three thumbnails 
			//because they already exist. start the cycle beyond 0. use numInShowcase
			var j = initSettings.numInShowcase;
		}else{
			var j = 0;
		}

		for (j; j < numPerHeading; j++) {//# of thumbnails per section
			//create elements for generic thumbnail
			var divTop = document.createElement("DIV");
			divTop.classList.add("col-sm-3");
			var divThumb = document.createElement("DIV");
			var img = document.createElement("IMG");
			img.classList.add("img-thumbnail");
			var divCapt = document.createElement("DIV");
			divCapt.classList.add("caption");
			var title = document.createElement("H4");

			//construct generic thumbnail
			divThumb.appendChild(img);
			divThumb.appendChild(divCapt);
			divCapt.appendChild(title);
			divTop.appendChild(divThumb);

			//construct row 
			var row = document.createElement("DIV");
			row.classList.add("row");
			
			//specifics per thumbnail
			if (i == "0" && attachmentPoints[i] != "") {//publicWorks
				img.src = mapMarkers.publicWorks[j].img;
				img.alt = mapMarkers.publicWorks[j].name;
				title.innerHTML = mapMarkers.publicWorks[j].name;

			} else if (i == "1"  && attachmentPoints[i] != "") {//schools
				img.src = mapMarkers.schools[j].img;
				img.alt = mapMarkers.schools[j].name;
				title.innerHTML = mapMarkers.schools[j].name;

			} else if (i == "2" && attachmentPoints[i] != "") {//churches
				img.src = mapMarkers.churches[j].img;
				img.alt = mapMarkers.churches[j].name;
				title.innerHTML = mapMarkers.churches[j].name;
			}

			//append generic thumbnail
			if (j % 4 == 0 || j == 0) {
				$("#"+attachmentPoints[i]).append(row);
			}
			$("#"+attachmentPoints[i]).append(divTop);
		}
	}
};

//swap up caret for down caret and show/create thumbnails
var toggleThumbnails = function(clicked_id, moreButtonPushed, eventClick) {
    //variables to pass to makeCommercialThumbnail()
	var attachmentPoints = ["publicWorksShowMore", "schoolsShowMore", "churchesShowMore"];
	var arrayElem;
	var clickTrue = true;

	//cycle through each heading to find which one got clicked
	for (var i = 0; i < attachmentPoints.length; i++) {
		//if what is clicked matches a attachPointList entry
		if (attachmentPoints[i].indexOf(clicked_id) > -1) {
			//decide how many thumbnails to make per section
			var numPerHeading = mapMarkers[clicked_id].length;
			console.log("numPerHeading: ", numPerHeading);
			//log the name of the item pressed (publicWorks, schools or churches)						
			arrayElem = attachmentPoints[i];
			//clear out the array but keep placeholders so there are still three spots
			attachmentPoints = (['', '', '']);
			//put the element in its proper spot in the array, leaving the other spots empty
			//we'll use this array to pipe into the makeThumbnails function
			attachmentPoints.splice(i, 1, arrayElem);
			
			//***IF the MORE button caret facing DOWN***
			if ($("#"+clicked_id).hasClass("glyphicon-menu-down") == true) {
				//load or MAKE thumbnails
				if ($("#"+attachmentPoints[i]).children().length == 0) {
					makeCommercialThumbnail(attachmentPoints, numPerHeading, clickTrue);
				}
				$("#"+clicked_id).addClass("glyphicon-menu-up");
				$("#"+clicked_id).removeClass("glyphicon-menu-down");


			//***ELSE the MORE button caret facing UP***
			} else if ($("#"+clicked_id).hasClass("glyphicon-menu-up") == true) {
				//and the button push wasn't from the navbar
				if (!eventClick.classList.contains("portfolioButtons")) {
					$("#"+clicked_id).addClass("glyphicon-menu-down");
					$("#"+clicked_id).removeClass("glyphicon-menu-up");
				}
				moreButtonPushed = false;
			}
		}
	}
};

//listens for any click and if the event contains: publicWorks, schools or churches 
//figures out where it came from and toggles collapsed sections appropriately
addEventListener('click', function (ev) {
	var clicked_id;
	var moreButtonPushed = false;
	var eventClick = ev.target;

	//this click is coming from the navbar.html insert on any page
    if (eventClick.classList.contains("portfolioButtons")) {
		//log what button pushed it -- so you know where to attach the thumbnails
	    clicked_id = eventClick.text;
	    clicked_id = clicked_id.split(" ").join("");
	    clicked_id = clicked_id.charAt(0).toLowerCase() + clicked_id.slice(1);
	    //clicked_id = clicked_id.toString();

	    //re-direct to page and scroll to bookmark
		window.location.href = "commercial.html#"+clicked_id+"Header";

		//manually open the section (since the button wasn't physically pushed)
		if (moreButtonPushed == false) {
    		$("#"+clicked_id+"ShowMore").addClass("in");
    		moreButtonPushed = true;
    	}

    //this click is coming from the commercial.html page
	} else if (eventClick.classList.contains("moreButtons")){
		clicked_id = eventClick.id;
		moreButtonPushed = true;
	}

	//swap up caret for down caret and show/create thumbnails
	toggleThumbnails(clicked_id, moreButtonPushed, eventClick);

	//manually open the section (since the button wasn't physically pushed)
	//window.location.href = "#endCommercialPage";

});

var showPDFs = function() {
	$("#listOfPDFs").toggleClass("hide");
	$(".spacerGoAway").toggleClass("hide");
}




