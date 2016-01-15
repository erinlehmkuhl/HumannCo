
var link = document.querySelector('link[rel="import"]');
var content = link.import;

// (what will be imported)
var nav = content.querySelector('nav');

//(where it's posting to)
var insertNavbarHere = document.getElementById("insertNavbarHere");

insertNavbarHere.appendChild(nav.cloneNode(true));



var scrollToPublicWorks = function() {
	alert("need to write a scroll function")
};

var scrollToSchools = function() {
	alert("need to write a scroll function")
};

var scrollToChurches = function() {
	alert("need to write a scroll function")
};

