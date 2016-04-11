var modalData = {
  "survey": [
    {"title": "Topographic",
    "paragraph": "Topographic Surveys are used to identify and map the contours of the ground and existing features on the surface of the earth or slightly above or below the surface of the earth (i.e. trees, buildings, streets, walkways, manholes, utility poles, retaining walls, etc."},

    {"title": "Building Location",
    "paragraph": "The location survey shows the approximate location of the dwelling and other structures within the property boundaries. A location survey will also determine whether any adjoining property owner is encroaching on the property you are purchasing such as by having a building extending across the neighbor’s property onto your property, or structures on the property you are purchasing that appear to encroach over building restriction lines, property lines, or drainage and utility easements."},
  
    {"title": "ALTA",
    "paragraph": "An ALTA survey is a boundary survey prepared to a set of minimum standards that have been jointly prepared and adopted by the ALTA/ACSM. The survey shows improvements, easements, rights-of-way and other elements impacting land ownership."},

    {"title": "FEMA Elevation Certificates",
    "paragraph": "An Elevation Certificate is an important tool that documents the elevation of your building."},

    {"title": "Setback and other building permit certificates",
    "paragraph": "In land use, a setback is the distance which a building or other structure is set back from a street or road, a river or other stream, a shore or flood plain, or any other place which is deemed to need protection."},

    {"title": "Forensic and surveys relating disputes",
    "paragraph": "No opinions regarding the status of property lines or property corners are provided in a forensic survey, nor are property corners established or re-established as a result of a forensic survey.  A forensic survey may include boundary information as incidental to the focus of the survey, however, no opinions regarding boundaries are provided. A forensic survey is scientific in its methodology.  The final product of the forensic survey is a document that illustrates the evidence discovered during the survey to support and advance a scientific, engineering, and/or legal theory."},

    {"title": "Boundary Staking",
    "paragraph": "Boundary surveying is performed to establish or reestablish boundary lines for a parcel. Using the parcel’s deed description and/or other title documents, along with the boundary evidence found during field survey, a land surveyor will determine the boundary lines by applying boundary laws, rules, and principles to guide them to a parcel’s accurate boundaries. When the surveyor has determined the final boundaries of the parcel, the parcel’s boundary markers can be set. We use an iron rod set in the ground with a red cap imprinted with our name and license number. This type of survey is sometimes called a staked survey."},

    {"title": "Record of Surveys",
    "paragraph": "Record of Survey. A Record of Survey is an official map (18 x 26) that is reviewed by the County Surveyors Office and then recorded with the County Recorder. This map represents a survey made on the ground and delineates the deed described lines."},

    {"title": "Corner Records",
    "paragraph": "A Corner Record is filed whenever a Land Surveyor places or replaces a property marker or any other marker as provided for under the Professional Land Surveyors Act. As a general rule, the Corner Record is used to document the placement of a survey monument when the marker already appeared on a previously filed Corner Record or on a recorded ROS or a Subdivision Map."},

    {"title": "Lot Line Adjustments",
    "paragraph": "A lot line adjustment is the process that is used to change property lines of existing parcels. The process can be used to do a number of things, such as: combine up to four (4) adjacent parcels into one (1) parcel, alter the boundary between up to four (4) parcels, or reconfigure the shapes of up to four (4) parcels."},

    {"title": "Lot Mergers",
    "paragraph": "something something"},

    {"title": "Easement and Deed Preparation",
    "paragraph": "something something"}  
  ],
  "engineering": [  
    {"title": "SWPPP",
    "paragraph": "something something"},

    {"title": "C.3",
    "paragraph": "something something"},

    {"title": "QSD",
    "paragraph": "something something"},

    {"title": "QSP",
    "paragraph": "something something"}
  ],
  "construction": [
    {"title": "Storm Drainage and Related Services",
    "paragraph": "something something"},

    {"title": "Grading",
    "paragraph": "something something"},

    {"title": "Roadways",
    "paragraph": "something something"},

    {"title": "Utilities",
    "paragraph": "something something"},

    {"title": "Subdivisions",
    "paragraph": "something something"}
  ],
    "staking": [
    {"title": "Layout for Buildings, Parking Lots and Roadways",
    "paragraph": "something something"},

    {"title": "Pier, Grade Beam, Pilings, Columns and Podiums",
    "paragraph": "something something"},

    {"title": "Rough and Finished Grading",
    "paragraph": "something something"},

    {"title": "Utility Staking",
    "paragraph": "something something"},

    {"title": "Pipeline Layout",
    "paragraph": "something something"},
    
    {"title": "As-built Construction Surveys",
    "paragraph": "something something"}
    ],
    "plans": [
    {"title": "Storm Drainage and related services ",
    "paragraph": "something something"},

    {"title": "Grading",
    "paragraph": "something something"},

    {"title": "Roadways",
    "paragraph": "something something"},

    {"title": "Utilities",
    "paragraph": "something something"},
    
    {"title": "Subdivisions",
    "paragraph": "something something"}
    ]
};

var clickedImage;

var createModal = function() {
  var modalContent = document.createElement("DIV");
  modalContent.classList.add("modal-content");
  var modalHeader = document.createElement("DIV");
  modalHeader.classList.add("modal-header");
  var modalCloseX = document.createElement("BUTTON");
  modalCloseX.setAttribute("type", "button");
  modalCloseX.setAttribute("data-dismiss", "modal");
  modalCloseX.classList.add("close");
  var modalSpan = document.createElement("SPAN");
  modalSpan.classList.add("glyphicon", "glyphicon-remove");
  var modalTitle = document.createElement("H4");
  modalTitle.classList.add("modal-title");
  var modalBody = document.createElement("DIV");
  modalBody.classList.add("modal-body");
  var modalParagraph = document.createElement("P");
  modalParagraph.classList.add("modal-paragraph");
  var modalFooter = document.createElement("DIV");
  modalFooter.classList.add("modal-footer");
  var modalClose = document.createElement("BUTTON");
  modalClose.setAttribute("type", "button");
  modalClose.setAttribute("data-dismiss", "modal");
  modalClose.classList.add("close");
  modalClose.innerHTML = "Close";

  $('#modal').append(modalContent);
  modalContent.appendChild(modalHeader);
  modalHeader.appendChild(modalCloseX);
  modalCloseX.appendChild(modalSpan);
  modalHeader.appendChild(modalTitle);
  modalContent.appendChild(modalBody);
  modalBody.appendChild(modalParagraph);
  modalContent.appendChild(modalFooter);
  modalFooter.appendChild(modalClose);
};


var showModal = function(page) {
  var clickedImage = event.path[1].id;
  $("#modal").toggle;

  var survey = getCategories(modalData);
    for (var i = 0; i < modalData[page].length; i++) {
      var jsonData = modalData[page][i].title.toLowerCase();
      if ( jsonData.indexOf(clickedImage) > -1 ) {
        $('.modal-title').text(modalData[page][i].title);
        $('.modal-paragraph').text(modalData[page][i].paragraph);
      }
    }
};

$(document).ready(function(){
  createModal();
  $("#modal").hide;
});
