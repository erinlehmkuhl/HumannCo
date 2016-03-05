var FAQ = {
	"sets": [

		{
			"question": "How much does a survey cost?",
			"answer": "The cost for most land surveying work is determined based on the following variables:<br><br>" +
				"<dfn>Record Search</dfn><br>" +
				"This varies by (a) the number of parcels involved; and (b) the number of past transactions. (This necessary step is complicated by the casual manner in which land transactions have been handled in the past, resulting in many vague, incomplete, and often contradictory legal descriptions and land records.)<br><br>" +

				"<dfn>Size and Shape of Property</dfn><br>" +
				"An irregularly shaped parcel has more corners to monument and a longer boundary than a rectangular parcel containing the same area.<br><br>" +

				"<dfn>Sectionalized Survey Work</dfn><br>" +
				"This could require the survey of the entire section (640 acres +) in which the land being surveyed lies, regardless of the area of the parcel. In some cases a survey of more than one section is required, depending on the location of the parcel in question in relation to the sections shown on the government plat map.<br><br>" +

				"<dfn>Terrain & Vegetation</dfn><br>" +
				"A level parcel of land is easier to survey than a mountainous parcel. Interference with lines of sight and accessibility complicate field work.<br><br>" +

				"<dfn>Amount of Existing Evidence on the Property</dfn><br>" +
				"Existing evidence such as iron, wood, or stone monuments, old fences, and occupation lines, witness trees, etc., aid the Surveyor. Their absence may compound difficulties involved in retracing boundaries."
		},
		{
			"question": "What is an easement?",
			"answer": "An easement is an area of land owned by the property owner, but in which other parties, such as utility companies, may have limited rights granted for a specific purpose. If a utility company owns the rights, they may have a utility line running below the ground, across your property."
		},

		{
			"question": "What is an encroachment?",
			"answer": "Encroachments are improvements, such as fences or buildings, which extend across the property line."
		},
		{
			"question": "What is a plat?",
			"answer": "A legal document intended to take a large parcel of land and divide it into smaller parcels of land. A subdivision plat may also create public rights-of-way or easements, and is usually filed with the county clerk & recorder's office."
		},
		{
			"question": "How do I find my existing boundaries?",
			"answer": "You should have a description of your property included in your deed when you bought the property."
		},
		{
			"question": "I just want to put in a fence, what do I need?",
			"answer": "This needs a proper answer. Erin doesn't know anything about surveys."
		},
		{
			"question": "How do I chose a land surveyor?",
			"answer": "Only a Professional Land Surveyor (or Civil Engineer registered prior to 1982) licensed by the State Board for Professional Engineers and Land Surveyors is legally authorized to practice land surveying in the State of California. Most active Land Surveyors are listed in the yellow pages of the telephone directory, or a listing may be obtained from the California Land Surveyors Association. A Land Surveyor is an integral part of a professional team composed of attorneys, engineers, architects, planners, and landscape architects. <br><br> Some land surveying firms offer comprehensive services including some, or all, of the above. Professional expertise can have a significant impact upon the planned use of your property. Select a reputable Land Surveyor in whose skill and judgment you can put your trust. Your selection should be made when you are sure that the professional you have chosen has all of the facts, and is completely aware of your requirements and the requirements of the governmental agency having jurisdiction over the property."
		}
		]
};

var initFAQpage = function() {
	for (var i = 0; i < FAQ.sets.length; i++) {
		var parentCollapse = "#FAQdropdown" + i;
		var parentID = "FAQparent" + i;
		var child = "FAQdropdown" + i;
		var question = FAQ.sets[i].question;
		var answer = FAQ.sets[i].answer;

		var p1 = document.createElement("P");
		p1.setAttribute("id", parentID);
		p1.setAttribute("class", "FAQquestions FAQset");
		p1.setAttribute("data-toggle", "collapse");
		p1.setAttribute("data-target", parentCollapse);
		p1.innerHTML = question;

		var p2 = document.createElement("P");
		p2.setAttribute("id", child);
		p2.setAttribute("class", "FAQset FAQanswers collapse");
		p2.innerHTML = answer;



		$("#attachFAQquestHere").append(p1);
		$("#attachFAQquestHere").append(p2); 
	}
};

var resetFAQ = function() {
	//clear out previous search from searchBox
	document.getElementById('searchBox').value = "";

	//clear out all questions currently on the page
	$("#attachFAQquestHere").children().remove();

	//reload all questions
	initFAQpage();

	//revert autofocus to text box
	document.getElementById('searchBox').focus();

};

var searchFAQ = function() {
	var topics = FAQ.sets.length;
	var searchTerm = $("#searchBox").val();
	var regexInput = new RegExp(searchTerm, "i");//properly formats the regex from the userInput

	resetFAQ();

	//cycle through the questions in JSON
	for (var i = 0; i < topics; i++) {
		var curQuest = FAQ.sets[i].question;
		var curAnsw = FAQ.sets[i].answer;
		 //if the user input from the search bar does not match the current item...
		if (regexInput.test(curQuest) == false && regexInput.test(curAnsw) == false) {
			//hide question and answer
			$("#FAQparent"+[i]).hide();
			$("#FAQdropdown"+[i]).hide();
		}
	}

};

//make enter button work like clicking ENTER
$("#searchBox").keyup(function(event){
	if(event.keyCode == 13){
		searchFAQ();
	}
});



initFAQpage();


