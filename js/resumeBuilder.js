var bio = {
  "name": "Hugo Pan",
  "role": "A Beginner of Web Development",
  "contacts": {
    "mobile": "123-456-7890",
    "email": "ponjuhao@gmail.com",
    "github": "pjhugo",
    "twitter": "@ponjuhao",
    "location": "Singapore"
  },
  "welcomeMessage": "I am Hugo, just a little bit awesome!",
  "skills": [
    "HTML", "CSS", "JavaScript"
  ],
  "biopic": "images/me.jpg",

  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

        $("#skills").append(formattedSkills);
      }
    }
  }
}


var education = {
  "schools": [
    {
      "name": "华南理工大学",
      "location": "中国广东广州",
      "degree": "工程学士",
      "majors": ["工程"],
      "dates": "2010 - 2014",
      "url": "http://www.scut.edu.cn"
    }
  ],
  "onlineCourses": [
   {
     "title": "前端工程师纳米课程",
     "school": "Udacity",
     "dates": "2017 年 12 月",
     "url": "https://cn.udacity.com"
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

          $(".education-entry:last").append(formattedMajor);
        }
      }

      $("#education").append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedUrl);
      }
    }
  }
}



var work = {
  "jobs": [
    {
      "employer": "ABCDEF",
      "title": "工程师",
      "location": "中国广东广州",
      "dates": "2014 年 7 月 - 2017 年 5 月",
      "description": "testtesttesttesttesttesttesttesttesttesttesttesttesttest " +
                   "testtesttesttesttesttesttesttesttesttesttesttesttesttest " +
                   "testtesttesttesttesttesttest."
    },
    {
      "employer": "GHIJK",
      "title": "工程师",
      "location": "中国广东广州",
      "dates": "2017 年 5 月 - 至今",
      "description": "test1test1test1test1test1test1test1test1test1test1test1test1 " +
                   "test1test1test1test1test1test1test1test1test1test1test1test1 " +
                   "test1test1."
    }

  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  }
}



var projects = {
  "projects": [
    {
      "title": "123123123123",
      "dates": "2016 年 1 月",
      "description": "12332112345671233211234567123321123456712332112345671233211234567 " +
                     "12332112345671233211234567123321123456712332112345671233211234567 " +
                     "12332112345671233211234567.",

      "images": ["images/project_1.png", "images/project_2.png"]
    },
    {
      "title": "321321321",
      "dates": "2016 年 4 月",
      "description": "321321321321321321321321321321321321321321321321321321321321321 " +
                     "321321321321321321321321321321321321321321321321321321321321321 " +
                     "321321321321321321.",
      "images": ["images/project_3.jpg"]
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}



bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(gaodeMap);
