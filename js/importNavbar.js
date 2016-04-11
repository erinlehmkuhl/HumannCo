
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