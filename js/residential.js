var hiddenList = [];	

var quiz = {
	"initial": [{
			"question": "Would you like to use the Residential Survey Wizard?",			
			"bigThumbnail": [{}],			
			"smallThumbnails": [{}]
		}, 

		{
			"question": "Are you buying, selling or refinancing a house?",
			"bigThumbnail": [{
				"name": "Location Survey",
				"img": "img/thumbnails/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
				"name": "Improvement Location Certificate",
				"img": "img/thumbnails/chabot.jpg"
			}]

		}, 

		{
			"question": "Are you building a structure or a fence?",
			"bigThumbnail": [{
				"name": "Boundary Survey",
				"img": "img/thumbnails/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Improvement Survey Plat",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Lot Line Adjustment",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Partial or Full Aerial Topographic Survey",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Site Plan",
					"img": "img/thumbnails/chabot.jpg"
				}]
		},

		{
			"question": "Is your concern easements, encroachments or other parties that may have rights to your currently marked property?",
			"bigThumbnail": [{
				"name": "Land Survey",
				"img": "img/thumbnails/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Lot Line Adjustment",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "ADA Plans",
					"img": "img/thumbnails/chabot.jpg"
				}]
		},

		{
			"question": "Does this site have unusual grades and elevations?",
			"bigThumbnail": [{
				"name": "Topographic Survey",
				"img": "img/thumbnails/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Partial Aerial Topographic Survey",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Aerial Topographic Survey",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Elevation Certificate",
					"img": "img/thumbnails/chabot.jpg"
				},

				{
					"name": "Preliminary Grading",
					"img": "img/thumbnails/chabot.jpg"
				}]
		}
	]
};


//attachmentPointList: array of 3 jquery #id objects. use '' to skip a section. order: publicWorks, School, Church
//totalNum: integer. (number of thumbnails per section)
//thumbnail: JSON array index for the set you want ("smallThumbnails" will loop through smallThumbnails)
var makeResidentialThumbnail = function(attachmentPoint, totalNum, thumbnail, init) {
	var j = 0;
	//to skip the first non-entry in the JSON
	if (init) {
		j = 1;
	}
	for (j; j < totalNum; j++) {//# of thumbnails per section
		//create elements for generic thumbnail
		var divTop = document.createElement("DIV");
		divTop.classList.add("col-sm-3");
		// var divThumb = document.createElement("DIV");
		// divThumb.classList.add("thumbnail");
		var img = document.createElement("IMG");
		img.classList.add("img-thumbnail");
		// var divCapt = document.createElement("DIV");
		// divCapt.classList.add("caption");
		var title = document.createElement("H4");

		//construct generic thumbnail
		divTop.appendChild(img);
		// divThumb.appendChild(divCapt);
		divTop.appendChild(title);
		// divTop.appendChild(divThumb);
		
		//specifics per thumbnail
		for (var i = 0; i < quiz.initial[j][thumbnail].length; i++) {
			//to skip the first intro enry in the JSON
			if (quiz.initial[j][thumbnail][i].name == undefined) {
				j++;
			}
			img.src = quiz.initial[j][thumbnail][i].img;
			img.alt = quiz.initial[j][thumbnail][i].name;
			title.innerHTML = quiz.initial[j][thumbnail][i].name;
			//ids for each thumbnail
			var domId = quiz.initial[j][thumbnail][i].name.replace(/\s+/g, '');
			divTop.classList.add(domId);
		}



		//append generic thumbnail
		$("#"+attachmentPoint).append(divTop);
	}
};

var categoryThumbnails = [];

var quizYesButton = function() {
	var curQuestion = $("#residentialQuestion").text();

	//loop through the available questions to see which one we are currently on
	for (var b = 0; b < quiz.initial.length; b++) {
		if (quiz.initial[b].question == curQuestion) {
			//FOR THE FIRST question only
			if (quiz.initial[b].question == quiz.initial[0].question) {
				//show next question in jumbotron
				$("#residentialQuestion").text(quiz.initial[b+1].question);
				//show back button in DOM 
				$("#quizBack").show();

			//other than the first time, things to do when hitting YES button
			} else {
				//show small answer header and thumbnails
				$("#surveyOptions").show();
				makeResidentialThumbnail('residentialSmallThumbnailHeader', quiz.initial[b].smallThumbnails.length, "smallThumbnails");
			

				//show explanation in jumbotron
				$("#residentialQuestion").text(quiz.initial[b].bigThumbnail[0].name);
				$("#residentialExplanation").text(quiz.initial[b].bigThumbnail[0].p);

				//get rid of incorrect big category thumbnails by hiding all of them
				categoryThumbnails = $("#residentialLargeThumbnailHeader").children();
				categoryThumbnails.hide();

				//reinstate the current [i] big thumnail from JSON
				var divKeep = quiz.initial[b].bigThumbnail[0].name.replace(/\s+/g, '');
				$("."+divKeep).show();
			}
			
		}
	}
	return categoryThumbnails;
};


var quizNoButton = function() {
	var curQuestion = $("#residentialQuestion").text();

	//loop through the available questions to see which one we are currently on
	for (var c = 0; c < quiz.initial.length; c++) {
		if (quiz.initial[c].question == curQuestion) {
			//proceed to next question
			var nextQuestion = quiz.initial[c + 1].question;
			$("#residentialQuestion").text(nextQuestion);
		}
	}
	//information for BACK button
	categoryThumbnails = $("#residentialLargeThumbnailHeader").children();
	return categoryThumbnails;
};


var quizBackButton = function() {
	var curText = $("#residentialQuestion").text();

	//reinstate the category thumbnails
	for (var d = 0; d < categoryThumbnails.length; d++) {
		categoryThumbnails[d].style.display = "inline";
	}

	//remove the options thumbnails
	$("#surveyOptions").hide();
	$("#residentialSmallThumbnailHeader").children().hide();

	//reset jumbotron text
	for (var e = 0; e < quiz.initial.length; e++) {
		if (quiz.initial[e].question == curText) {
			$("#residentialQuestion").text(quiz.initial[e-1].question);
		} else if (quiz.initial[e].bigThumbnail[0].name == curText) {
			$("#residentialQuestion").text(quiz.initial[e].question);
		}

		//if the back button goes beyond the start, reset it
		if (e < 0) {
			e = 0
		}

		//clear the explanation text in the jumbotron
		$("#residentialExplanation").text("");
	}
};



//initialize page
$(document).ready(function() {
	$("#residentialQuestion").text(quiz.initial[0].question);
	makeResidentialThumbnail('residentialLargeThumbnailHeader', quiz.initial.length, "bigThumbnail", "init");
	$("#quizBack").hide();
	$("#surveyOptions").hide();
});
