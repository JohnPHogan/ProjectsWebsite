var skills = ["Software Development", "Data Analytics", "Reporting Solutions", "BBQ"];

var bio = {
   "name" : "John Hogan",
   "role" : "Data Analyst/Web & Python Developer",
   "Contact" : {
     "contactPhone" : "(210) 464-1566",
     "contactEmail" : "jphogan00@gmail.com",
     "gitHub" : "JohnPHogan",
     "location" : "San Antonio, TX",
   },
   "pictureURL" : "images/me.png",
   "welcomeMessage" : "Let's do stuff!",
   "skills" : skills
};

var work = [
    {
      "Employer" : "Independent Contractor",
      "Title" : "Consultant",
      "Dates" : "June 2014 - Present",
      "Location" : "Virtual Office",
      "Description" : "Performed a variety of services including development of custom reports, training and performing as Subject Matter Expert."
    },
    {
      "Employer" : "Avaya/Lucent Technonologies",
      "Title" : "Member of Technical Staff/Senior Reporting and Data Analytics Consultant",
      "Dates" : "April 2000 - June 2014",
      "Location" : "Westminster, CO/Virtual Office",
      "Description" : "Developed commerical software for Fortune 500 company call centers, working in Visual Basic, Java and C#.  Worked directly with customers as a consultant and Subject Matter Expert on reporting and data anlytics."
    },
    {
      "Employer" : "Emerald Mortgagee",
      "Title" : "Director of Software Development",
      "Dates" : "June 1998 - April 2000",
      "Location" : "Denver, CO",
      "Description" : "Developed internally used software to import data from multiple sources and provide applications to assist in providing financial services working in Visual Basic and Java."
    },
    {
      "Employer" : "AT&T Bell Labs",
      "Title" : "Member of Technical Staff",
      "Dates" : "October 1995 - June 1998",
      "Location" : "Westminister, CO",
      "Description" : "Developed commerical software for Fortune 500 company call centers, working in Visual Basic."
    }
]

function displayWork()
{
  $("#workExperience").append(HTMLworkStart);
  var Employer = "";
  var Title = "";
  var Dates = "";
  var Location = "";
  var Description = "";
  var EmployerTitle = "";

  for (var i in work) {
    Employer = HTMLworkEmployer.replace("%data%", work[i].Employer);
    Title = HTMLworkTitle.replace("%data%", work[i].Title);
    Dates = HTMLworkDates.replace("%data%", work[i].Dates);
    Location = HTMLworkLocation.replace("%data%", work[i].Location);
    Description = HTMLworkDescription.replace("%data%", work[i].Description);
    EmployerTitle = Employer + Title;

    $(".work-entry:last").append(EmployerTitle);
  //  $(".work-entry:last").append(Title);
    $(".work-entry:last").append(Dates);
    $(".work-entry:last").append(Location);
    $(".work-entry").append(Description);
  }
}

var education = {
  "onlineCourses" : [
    {
      "name" : "Udacity - Descriptive Statistics",
      "degree" : "Course work complete",
      "year" : "Jan 2015",
      "location" : "Online"
    },
    {
      "name" : "Udacity - Intro to Data Science",
      "degree" : "Course work complete",
      "year" : "Jan 2015",
      "location" : "Online"
    }
  ],
  "schools" : [
    {
      "name" : "University of Denver",
      "degree" : "Bachelors of Arts",
      "year" : "1982",
      "location" : "Denver, CO"
    }
  ]
};

var projects = [
  {
    "Title" : "Statistical Analysis of New York City Subway data",
    "Dates" : "Jan 2015 - Present",
    "Description" : "A statistical analysis of how rain impacted ridership in May 2011.",
    "url" : "images/subway.jpg"
  },
  {
    "Title" : "Avacado Py",
    "Dates" : "November 2014 - Present",
    "Description" : "Python based front end for Arangodb database.",
    "url" : "images/Arango.png"
  },
  {
    "Title" : "NBA Statistical Analysis",
    "Dates" : "Feb 2015 - Present",
    "Description" : "A statistical analysis of NBA teams from 2014 data.",
    "url" : "images/basket.png"
  },
  {
    "Title" : "The Zen of Brisket",
    "Dates" : "Dec 2014 - Present",
    "Description" : "A meditation on the smoking of brisket.",
    "url" : "images/zen.png"
  }
];

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLcontactGeneric.replace("%contact%", bio.Contact);
var formattedMobile = HTMLmobile.replace("%data%", bio.Contact.contactPhone);
var formattedEmail = HTMLemail.replace("%data%", bio.Contact.contactEmail);
var formattedGitHub = HTMLgithub.replace("%data%", bio.Contact.gitHub);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));
var formattedLocation = HTMLlocation.replace("%data%", bio.Contact.location);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPic);
//$("#header").prepend(formattedSkills);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGitHub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
//$("#header").prepend(formattedContactInfo);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var skillList = "";

  for (var i = 0; i < bio.skills.length;i++) {
    skillList = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(skillList);
  }
}

displayWork();

$("#education").append(HTMLschoolStart);
var Name = HTMLschoolName.replace("%data%", education.schools[0].name);
var Degree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
Dates = HTMLschoolDates.replace("%data%", education.schools[0].year);
Location = HTMLschoolLocation.replace("%data%", education.schools[0].location);

$("#education").append(Name);
$("#education").append(Degree);
$("#education").append(Dates);
$("#education").append(Location);

$("#education").append(HTMLonlineClasses);

for (var i in education.onlineCourses)
{
  Name = HTMLschoolName.replace("%data%", education.onlineCourses[i].name);
  Degree = HTMLschoolDegree.replace("%data%", education.onlineCourses[i].degree);
  Dates = HTMLschoolDates.replace("%data%", education.onlineCourses[i].year);
  Location = HTMLschoolLocation.replace("%data%", education.onlineCourses[i].location);
  $("#education").append(Name);
  $("#education").append(Degree);
  $("#education").append(Dates);
  $("#education").append(Location);
}

$("#projects").append(HTMLprojectStart)

for (var i in projects)
{
  Name = HTMLprojectTitle.replace("%data%", projects[i].Title);
  Dates = HTMLprojectDates.replace("%data%", projects[i].Dates);
  Description = HTMLprojectDescription.replace("%data%", projects[i].Description);
  url = HTMLprojectImage.replace("%data%", projects[i].url);
  $("#projects").append(Name);
  $("#projects").append(Dates);
  $("#projects").append(Description);
  $("#projects").append(url);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
