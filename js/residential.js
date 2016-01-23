var quiz = {
	"surveys": [
		{"name": "ALTA Survey", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": 1},
		
		{"name": "Partial Survey", 
		"img": "img/HumanCoImages/pastProjects/alcatraz.jpg",
		"parent": "description of work done at this site"},
		
		{"name": "Lot Line Adjustment", 
		"img": "img/HumanCoImages/pastProjects/chabot.jpg",
		"parent": "description of work done at this site"},
		
		{"name": "Preliminary Grading and Drainage", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": "description of work done at this site"},
		
		{"name": "Base Map", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": "description of work done at this site"},

		{"name": "Elevation Certificate", 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"parent": "description of work done at this site"},
		
		{"name": "Civil Site Conditions Report", 
		"img": "img/HumanCoImages/pastProjects/santaClara.jpg",
		"parent": "description of work done at this site"},
		
		{"name": "ADA Plans", 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"parent": "description of work done at this site"}
	], 
	"questions": [
		{1: "Is this the first survey on this property?",
		"parent": 0}, 
		{2: "Is the purpose of your survey for compliance with FEMA or the ADA?",
		"parent": 1},
		{3: "Is this a project that will require an architect or a designer?",
		"parent": 2},
		{4: "Will you need a photogrammetric or topographic survey?",
		"parent": 3}
	]
};



//attachmentPointList: array of 3 jquery #id objects. use null to skip a section. order: publicWorks, School, Church
//numPerHeading: integer will do (number of thumbnails per section)
var makeResidentialThumbnail = function(attachmentPoint, totalNum) {
	for (var j = 0; j < totalNum; j++) {//# of thumbnails per section
		//create elements for generic thumbnail
		var divTop = document.createElement("DIV");
		divTop.classList.add("col-sm-6");
		var divThumb = document.createElement("DIV");
		divThumb.classList.add("thumbnail");
		var img = document.createElement("IMG");
		var divCapt = document.createElement("DIV");
		divCapt.classList.add("caption");
		var title = document.createElement("H4");

		//construct generic thumbnail
		divThumb.appendChild(img);
		divThumb.appendChild(divCapt);
		divCapt.appendChild(title);
		divTop.appendChild(divThumb);
		
		//specifics per thumbnail
		img.src = quiz.surveys[j].img;
		img.alt = quiz.surveys[j].name;
		title.innerHTML = quiz.surveys[j].name;


		//append generic thumbnail
		$("#"+attachmentPoint).append(divTop);
	}
};

//click the yes, no or back buttons and navigate the quiz
addEventListener('click', function (ev) {	
	//format the incoming information so it can be compared to the attachmentPointList
    if (ev.target.classList.contains("quizButtons")) {
		//log what button pushed it -- so you know where to attach the thumbnails
        var clicked_id = ev.target.text;
	}
//log the question number that you are
//if you click yes
//	log that you are on question two
//	show question two
//	subtract the images that dont apply
//if you log question 5 
//	show final answer

});


//initialize page
$(document).ready(function() {
	makeResidentialThumbnail('residentialThumbnailHeader', quiz.surveys.length);
});
