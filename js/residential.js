var hiddenList = [];	

var quiz = {
	"initial": [{
			"question": "Are you buying, selling or refinancing a house?",
			"bigThumbnail": [{
				"name": "Location Survey",
				"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
				"name": "Improvement Location Certificate",
				"img": "img/HumanCoImages/pastProjects/chabot.jpg"
			}]

		}, 

		{
			"question": "Are you building a structure or a fence?",
			"bigThumbnail": [{
				"name": "Boundary Survey",
				"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Improvement Survey Plat",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Lot Line Adjustment",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Partial or Full Aerial Topographic Survey",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Site Plan",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				}]
		},

		{
			"question": "Is your concern easements, encroachments or other parties that may have rights to your currently marked property?",
			"bigThumbnail": [{
				"name": "Land Survey",
				"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Lot Line Adjustment",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "ADA Plans",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				}]
		},

		{
			"question": "Does this site have unusual grades and elevations?",
			"bigThumbnail": [{
				"name": "Topographic Survey",
				"img": "img/HumanCoImages/pastProjects/navalWeapons.jpg",
				"p": "shows the location of the improvements on the property in relation to the apparent boundary lines of the property. It generally involves a physical inspection of the property and is accurate to plus or minus a few feet."
			}],
			"smallThumbnails": [{
					"name": "Partial Aerial Topographic Survey",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Aerial Topographic Survey",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Elevation Certificate",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				},

				{
					"name": "Preliminary Grading",
					"img": "img/HumanCoImages/pastProjects/chabot.jpg"
				}]
		}
	]
};


//attachmentPointList: array of 3 jquery #id objects. use null to skip a section. order: publicWorks, School, Church
//numPerHeading: integer will do (number of thumbnails per section)
//whichSet: JSON array index for the set you want
var makeResidentialThumbnail = function(attachmentPoint, totalNum, thumbnail) {
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
		for (var i = 0; i < quiz.initial[j][thumbnail].length; i++) {
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

var divList = [];

var quizYesButton = function() {
	var curQuestion = $("#residentialQuestion").text();

	//loop through the available questions to see which one we are currently on
	for (var i = 0; i < quiz.initial.length; i++) {
		if (quiz.initial[i].question == curQuestion) {
			//show answer thumbnails
			makeResidentialThumbnail('residentialSmallThumbnailHeader', quiz.initial[i].smallThumbnails.length, "smallThumbnails");
		
			//show explanation in jumbotron
			$("#residentialQuestion").text(quiz.initial[i].bigThumbnail[0].name);
			$("#residentialExplanation").text(quiz.initial[i].bigThumbnail[0].p);


			//get rid of incorrect categories
			divList = $("#residentialLargeThumbnailHeader").children();
			var divKeep = quiz.initial[i].bigThumbnail[0].name.replace(/\s+/g, '');
			for (var j = 0; j < divList.length; j++) {
				if (divList[j].classList.contains(divKeep)) {
					$("#residentialLargeThumbnailHeader").children().hide();
					$("."+divKeep).show();
				}
			
			}
			
		}
	}
	return divList;
};


var quizNoButton = function() {
	var curQuestion = $("#residentialQuestion").text();

	//loop through the available questions to see which one we are currently on
	for (var i = 0; i < quiz.initial.length; i++) {
		if (quiz.initial[i].question == curQuestion) {
			//proceed to next question
			var nextQuestion = quiz.initial[i + 1].question;
			$("#residentialQuestion").text(nextQuestion);

			//take away thumbnails that don't belong
		}
	}

};


var quizBackButton = function() {
	var curName = $("#residentialQuestion").text();

	//reinstate the category thumbnails
	for (var i = 0; i < divList.length; i++) {
		divList[i].style.display = "inline";
	}

	//remove the options thumbnails
	$("#residentialSmallThumbnailHeader").children().hide();

	//reset jumbotron text
	for (var i = 0; i < quiz.initial.length; i++) {
		if (quiz.initial[i].bigThumbnail[0].name == curName) {
			$("#residentialQuestion").text(quiz.initial[i].question);
			$("#residentialExplanation").text("");
		}
	}
};



//initialize page
$(document).ready(function() {
	$("#residentialQuestion").text(quiz.initial[0].question);
	makeResidentialThumbnail('residentialLargeThumbnailHeader', quiz.initial.length, "bigThumbnail");
});
