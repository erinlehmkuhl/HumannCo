
var map;
var infowindow = null;
var markers =[];


var initCommercialPage = function() {
	//set one visible row of thumbails
	makeCommercialThumbnail(initSettings.headings, initSettings.numInShowcase);
	//set one map per section heading/with markers
	initCommercialMap();
};


var initCommercialMap = function() {
	this.cat = getCategories(mapMarkers);

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
			
			//if marker is clicked
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

			markers.push(marker);
			
			bounds.extend(new google.maps.LatLng(lat, lng));
		}
		map.fitBounds(bounds);
	}
	//error handling
	clearTimeout(googleMapTimeout);
};

addEventListener('click', function (ev) {
	var eventClick = ev.target;
	var title = eventClick.alt;
	var cats = getCategories(mapMarkers);

	for (var i = 0; i < markers.length; i++) {
		if (markers[i].title == title) {
			var marker = markers[i];
			markerBounce(marker);
			}
	}
});

//TODO: when thumbnail clicked, clear out old infowindow
var markerBounce = function(marker) {
	marker.setAnimation(google.maps.Animation.BOUNCE);
	setTimeout(function(){ marker.setAnimation(null); }, 1750);
};


//if the mapMarker is clicked, make a blue outline around the corresponding thumbnail
var highlightThumbnail = function(markerName) {
	var eventClick = document.createElement("div");//to placate toggleThumbnails function
	var clicked_id;
	var moreButtonPushed = false;

	//clear any blue outlines
	$("h4").parent().parent().parent().removeClass( "thumbnailHighlight" );

	//traverse JSON
	for (var i = 0; i < getCategories(mapMarkers).length; i++) {
		var category = getCategories(mapMarkers)[i];
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
					//if churches is opened up, scroll down so we know there is more to see	
					if (clicked_id == "churches") {
						window.location.href = "#endCommercialPage";
					}
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

var showPDFs = function() {
	$("#listOfPDFs").toggleClass("hide");
	$(".spacerGoAway").toggleClass("hide");
}




