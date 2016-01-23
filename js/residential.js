var quiz = {
	"answers": [
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
		{"question": "Is this the first survey on this property?",
		"parent": 0}, 
		{"question": "Is the purpose of your survey for compliance with FEMA or the ADA?",
		"parent": 1},
		{"question": "Is this a project that will require an architect or a designer?",
		"parent": 2},
		{"question": "Will you need a photogrammetric or topographic survey?",
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
		img.src = quiz.answers[j].img;
		img.alt = quiz.answers[j].name;
		title.innerHTML = quiz.answers[j].name;


		//append generic thumbnail
		$("#"+attachmentPoint).append(divTop);
	}
};

var quizYesButton = function() {
	var curQuestion = $("#residentialQuestion").text();	
	var curQuestNum;
	for (var i = 0; i < quiz.questions.length; i++) {
		if (quiz.questions[i].question == curQuestion) {
			curQuestNum = quiz.questions[i].parent + 1;
			console.log(curQuestion, " ", curQuestNum);
		}
	}

//log the question number that you are
//if you click yes
//	log that you are on question two
//	show question two
//	subtract the images that dont apply
//if you log question 5 
//	show final answer

};


//initialize page
$(document).ready(function() {
	$("#residentialQuestion").text(quiz.questions[0].question);
	//makeResidentialThumbnail('residentialThumbnailHeader', quiz.surveys.length);
});
