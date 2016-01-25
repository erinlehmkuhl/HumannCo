var hiddenList = [];


var quiz = {
	"answers": [
		{"name": "ALTA Survey", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": [1]},
		
		{"name": "Partial Survey", 
		"img": "img/HumanCoImages/pastProjects/alcatraz.jpg",
		"parent": [1,2]},
		
		{"name": "Lot Line Adjustment", 
		"img": "img/HumanCoImages/pastProjects/chabot.jpg",
		"parent": [1,2,3]},
		
		{"name": "Preliminary Grading and Drainage", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": [1,2,3]},
		
		{"name": "Base Map", 
		"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
		"parent": [1,2,3,4]},

		{"name": "Elevation Certificate", 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"parent": [1,2]},
		
		{"name": "Civil Site Conditions Report", 
		"img": "img/HumanCoImages/pastProjects/santaClara.jpg",
		"parent": [1,2]},
		
		{"name": "ADA Plans", 
		"img": "img/HumanCoImages/pastProjects/stanley.jpg",
		"parent": [1,2]}
	], 
	"questions": [
		{"question": "Is this the first survey on this property?",
		"num": 1}, 
		{"question": "Is the purpose of your survey for compliance with FEMA or the ADA?",
		"num": 2},
		{"question": "Is this a project that will require an architect or a designer?",
		"num": 3},
		{"question": "Will you need a photogrammetric or topographic survey?",
		"num": 4},
		{"question": "You will need a Base Map Survey."}
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
		//ids for each thumbnail
		var domId = quiz.answers[j].name.replace(/\s+/g, '');
		divTop.classList.add(domId);



		//append generic thumbnail
		$("#"+attachmentPoint).append(divTop);
	}
};

var quizYesButton = function() {
	var curQuestion = $("#residentialQuestion").text();

	//loop through the available questions and remove the thumnails that don't apply
	for (var i = 0; i < quiz.questions.length; i++) {
		if (quiz.questions[i].question == curQuestion) {

			//cycle to the next question
			$("#residentialQuestion").text(quiz.questions[i+1].question);
			
			for (var j = 0; j < quiz.answers.length; j++) {
				if (quiz.answers[j].parent.length == quiz.questions[i].num) {

					//erase the images that don't apply
					var rmElem = quiz.answers[j].name.replace(/\s+/g, '');
					hiddenList.push($('.'+rmElem));
					$('.'+rmElem).hide();

				}
			}
		}
	}
};

// var quizNoButton = function() {
// 	var curQuestion = $("#residentialQuestion").text();	

// 	//loop through the available questions and remove the thumnails that don't apply
// 	for (var i = 0; i < quiz.questions.length; i++) {
// 		if (quiz.questions[i].question == curQuestion) {

// 			//show the written answer 
// 			$("#residentialQuestion").text("You need a " + quiz.answers[i].name + ".");
			
// 			for (var j = 0; j < quiz.answers.length; j++) {
// 				if (quiz.answers[j].parent.length != quiz.questions[i].num) {

// 					//erase the images that don't apply
// 					var rmElem = quiz.answers[j].name.replace(/\s+/g, '');
// 					$('.' + rmElem).remove();
// 				}
// 			}
// 		}
// 	}
// };


var quizBackButton = function() {
	var curQuestion = $("#residentialQuestion").text();	
	var curQuestNum;

	//loop through the available questions
	for (var i = 0; i < quiz.questions.length; i++) {
		if (quiz.questions[i].question == curQuestion) {
			curQuestNum = quiz.questions[i].num;

			//go back one question
			$("#residentialQuestion").text(quiz.questions[i-1].question)

			//add thumbnails back in
			for (var j = 0; j < quiz.answers.length; j++) {
				if (quiz.answers[j].parent.length == quiz.questions[i].num) {

					//add the last batch of images to the DOM
					var listItem = hiddenList.shift();
					listItem.show();
				}
			}
		}
	}
};

//initialize page
$(document).ready(function() {
	$("#residentialQuestion").text(quiz.questions[0].question);
	makeResidentialThumbnail('residentialThumbnailHeader', quiz.answers.length);
});
