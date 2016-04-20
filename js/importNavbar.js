
var link = document.querySelector('link[rel="import"]');
var content = link.import;

// (what will be imported)
var nav = content.querySelector('nav');

//(where it's posting to)
var insertNavbarHere = document.getElementById("insertNavbarHere");

insertNavbarHere.appendChild(nav.cloneNode(true));


//________________________________________________________________
//helper function for traversing JSON
var getCategories = function(JSON) {
	var categories = [];
	for (var i = 0; i < Object.keys(JSON).length; i++){
		categories.push(Object.keys(JSON)[i]);
	}
	return categories;	
};


//________________________________________________________________
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