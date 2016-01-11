var pageAbout= function() {


	var aboutBlurb = 
	"Founded in 1967 by the late Robert C. Humann, the company has invaluable experience " +
	"with a wide range of projects and has enjoyed a reputation of uncompromising service. " +
	"The Firm is supported by a staff of highly trained and professionally licensed professionals " +
	"who make use of an array of state-of-the art equipment and technology. Each job is treated " +
	"with respect and commitment set forth by the founder many years ago."

	var aboutHeader = "About";


	// headshot area
	var headshotRick= 
		"<hr>" +
		"<div class='row'>" +
			"<div class='col-sm-4'>" +
				"<img style='width: 100px' src='img/HumanCoImages/headshots/frank.jpg' alt='Rick Humann' class='img-circle'>" +				
				"<h4>Rick Humann</h4>" +
			"</div>" +
			"<div class='col-sm-8'>" +
				"<p>This person is so great at coming to work and doing stuff. They also are super good at hearts, but not as good as Izzat.</p>" +
			"</div>";
		"</div>";


	var headshotIzzat= 
		"<div class='row'>" +
			"<div class='col-sm-4'>" +
				"<img style='width: 100px' src='img/HumanCoImages/headshots/dean.jpg' alt='Izzat Nashashibi' class='img-circle'>" +
				"<h4>Izzat Nashashibi</h4>" +
			"</div>" +
			"<div class='col-sm-8'>" +
				"<p>This person is so great at coming to work and doing stuff. They also are super good at hearts, but not as good as Izzat.</p>" +
			"</div>";
		"</div>";


	var headshotMay= 
		"<div class='row'>" +
			"<div class='col-sm-4'>" +
				"<img style='width: 100px' src='img/HumanCoImages/headshots/sammy.jpg' alt='May Munar' class='img-circle'>" +
				"<h4>May Munar</h4>" +
			"</div>" +
			"<div class='col-sm-8'>" +
				"<p>This person is so great at coming to work and doing stuff. They also are super good at hearts, but not as good as Izzat.</p>" +
			"</div>";
		"</div>";


	$('#contentText').nextAll().remove();
	$('#contentHeader').text(aboutHeader);
	$('#contentText').text(aboutBlurb);
	$('#contentText').append(headshotRick);
	$('#contentText').append(headshotIzzat);
	$('#contentText').append(headshotMay);
};