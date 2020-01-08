$("#new-schedule-section").hide();
$("#generated-schedule-section").hide();
$("#loadingGeneratingSchedule").hide();

$('.dropdown-trigger').dropdown();
// $("#schedule-date-dropdown").dropdown();
// $('.collapsible').collapsible();

var url = window.location.href;
var splitUrl = url.split("/");

var locationNum = window.location.pathname[1];

function showScheduleForDate(element, position){
  console.log("position: " + position);

  $("#schedule-date").text($(element).attr("data-date"));
  hideAndShowScheduleDays(position);

  $(`#main-day${position}`).show();
}

function hideAndShowScheduleDays(dayToShowNum){
  $("#main-day1").hide();
  $("#main-day2").hide();
  $("#main-day3").hide();
  $("#main-day4").hide();
  $("#main-day5").hide();
  $("#main-day6").hide();
  $("#main-day7").hide();
  $("#main-day8").hide();
  $("#main-day9").hide();
  $("#main-day10").hide();
  $("#main-day11").hide();
  $("#main-day12").hide();
  $("#main-day13").hide();
  $("#main-day14").hide();

  if(dayToShow !== null){
      $(`#main-day${dayToShowNum}`).show();
  }
}

$(document).ready(() => {
  //shows correct div on page refresh
  if (url.includes("notifications")) {
    showAndHideDiv("notifications");
  } else if (url.includes("employee-list")) {
    showAndHideDiv("employee-list");
  } else if (url.includes("locations-list")) {
    showAndHideDiv("location-list");
  } else if (url.includes("schedule")) {
    showAndHideDiv("schedule");
  }

  if (url.includes("schedule/add")) {
    $("#new-schedule-section").show();
  }
  if (url.includes("schedule/add/shifts")) {
    $("#add-shifts-dropdown").addClass("active");
  }

  $(".sidenav").sidenav();
  $(".tooltipped").tooltip();
  $(".collapsible").collapsible();
  $(".modal").modal();
  $("select").formSelect();
  $(".datepicker").datepicker();
  $(".scrollspy").scrollSpy();
  $("input#input_text, textarea#request-description").characterCounter();
});

$("#schedule-btn").on("click", () => {
  showAndHideDiv("schedule");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#schedule";

    console.log("url: " + newUrl);

  window.location.href = newUrl;
});
$("#schedule-btn-small").on("click", () => {
  showAndHideDiv("schedule");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#schedule";
  window.location.href = newUrl;
});
$("#shedule-partial").on("click", () => {
  showAndHideDiv("schedule");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#schedule";
  window.location.href = newUrl;
});
$("#notifications-btn").on("click", () => {
  showAndHideDiv("notifications");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/#notifications";
  window.location.href = newUrl;
});
$("#notifications-btn-small").on("click", () => {
  showAndHideDiv("notifications");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/#notifications";
  window.location.href = newUrl;
});
$("#employees-btn").on("click", () => {
  showAndHideDiv("employee-list");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#employee-list";
  window.location.href = newUrl;
  window.location.href = newUrl;
});
$("#employees-btn-small").on("click", () => {
  showAndHideDiv("employee-list");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#employee-list";
  window.location.href = newUrl;
  window.location.href = newUrl;
});
$("#employee-list-partial").on("click", () => {
  showAndHideDiv("employee-list");

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/1/employees/#employee-list";
  window.location.href = newUrl;
  window.location.href = newUrl;
});
$("#locations-btn").on("click", () => {
  showAndHideDiv("location-list");

  showLocations();
});
$("#locations-btn-small").on("click", () => {
  showAndHideDiv("location-list");

  showLocations();
});

$("#new-schedule-btn").on("click", () => {
  console.log("new schedule");
  $("#schedule").hide();
  $("#new-schedule-section").show();

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/" +
    splitUrl[5] +
    "/" +
    splitUrl[6] +
    "/employees/#schedule/add";
});
$("#add-employee-btn").on("click", function(){
  $(".modal").modal("close");
});

$("#new-schedule-push-btn").on("click", function(){
  $("#schedule").show();
  $("#generated-schedule-section").hide();
});
$("#account-info-btn").on("click", () => {
  $("#account-info").show();
  $("#request-off").hide();
  $("#emp-notifications").hide();
  $("#emp-schedule").hide();
});

$("#emp-notifications-btn").on("click", () => {
  $("#emp-notifications").show();
  $("#emp-schedule").hide();
  $("#account-info").hide();
  $("#request-off").hide();
});
$("#request-off-btn").on("click", () => {
  $("#request-off").show();
  $("#emp-notifications").hide();
  $("#emp-schedule").hide();
  $("#account-info").hide();
});
$("#emp-schedule-btn").on("click", () => {
  $("#emp-schedule").show();
  $("#emp-notifications").hide();
  $("#request-off").hide();
  $("#account-info").hide();
});

function showAndHideDiv(divNameToShow) {
  $("#schedule").hide();
  $("#notifications").hide();
  $("#employee-list").hide();
  $("#location-list").hide();

  $("#" + divNameToShow).show();
}

var numOfShifts = parseInt(splitUrl[5]);

$("#add_shift").on("click", () => {
  numOfShifts++;

  var newUrl =
    "http://" +
    splitUrl[2] +
    "/" +
    splitUrl[3] +
    "/" +
    splitUrl[4] +
    "/" +
    numOfShifts +
    "/employees/#schedule/add/shifts";
  window.location.href = newUrl;
});

$("#add-shift-section").on("click", () => {
  var shiftDropdownClass = $("#add-shifts-dropdown").attr("class");

  if (shiftDropdownClass !== "active") {
    window.location.href =
      "http://" +
      splitUrl[2] +
      "/" +
      splitUrl[3] +
      "/" +
      splitUrl[4] +
      "/" +
      splitUrl[5] +
      "/employees/#schedule/add/shifts";
  } else {
    window.location.href =
      "http://" +
      splitUrl[2] +
      "/" +
      splitUrl[3] +
      "/" +
      splitUrl[4] +
      "/" +
      splitUrl[5] +
      "/employees/#schedule/add";
  }
});

$("#new-schedule-add-btn").on("click", () => {
  $("#new-schedule-section").hide();
  // $("#generated-schedule-section").show();
  $("#loadingGeneratingSchedule").show();
});

$("#new-schedule-cancel-btn").on("click", () => {
  $("#new-schedule-section").hide();
});

// DAYS OF THE WEEK FOR SCHEDULE ADD //
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function showLocations(){
  $.get(`/api/company/findNum/${locationNum}`, (result) => {
  }).then((result) => {
    var companyNum = result.CompanyNum;
    
    $.get(`/api/company/findName/${companyNum}`, (res) => {
    }).then((res) => {
      var companyName = res.Name;

      var newUrl =
      "http://" +
      splitUrl[2] +
      "/" +
      splitUrl[3] +
      "/" +
      splitUrl[4] + "/" + companyName +
      "/#locations-list";

      window.location.href = newUrl;
    });
  });
}

const times = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am"
, "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"
, "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

for (let i = 0; i < daysOfWeek.length; i++) {
  //To Append Date
  let newWeekDate = $("<div>");
  $(newWeekDate).addClass("schedule-weekday-title col s8 offset-2");
  let newWeekLabel = $("<label>");
  $(newWeekLabel).addClass("newWeekLabel");
  $(newWeekLabel).text(daysOfWeek[i]);
  $(newWeekDate).append(newWeekLabel);

  //To Append Hours
  let newRow2 = $("<div>");
  $(newRow2).addClass("row");
  let newHourAvailability = $("<div>");
  $(newHourAvailability).addClass("input-field col s5 offset-1");

  var day = daysOfWeek[i].toLowerCase();

  let newSelectHours = $("<select>");
  $(newSelectHours).attr("id", "ea-" + day + "-hr");
  $(newSelectHours).addClass("start-hour front");
  $(newHourAvailability).append(newSelectHours);

  let disableHours = $("<option value='' disable selected>Hours</options>");
  $(newSelectHours).append(disableHours);

  for (let j = 0; j < 24; j++) {
    let newOption = $(`<option value= ${j}>`);
    $(newOption).text(times[j]);
    newSelectHours.append(newOption);
  }

  //To Append Minutes
  let newMinuteAvailability = $("<div>");
  $(newMinuteAvailability).addClass("input-field col s5 offset-1");

  let newSelectMinutes = $("<select>");
  $(newSelectMinutes).attr("id", "ea-" + day + "-min");
  $(newSelectMinutes).addClass("start-minute front");
  $(newMinuteAvailability).append(newSelectMinutes);

  let disableMinutes = $("<option value='' disable selected>Minutes</options>");
  $(newSelectMinutes).append(disableMinutes);

  let newOptionMinutes00 = $("<option value=00>");
  $(newOptionMinutes00).text("00");

  let newOptionMinutes15 = $("<option value=15>");
  $(newOptionMinutes15).text("15");

  let newOptionMinutes30 = $("<option value=30>");
  $(newOptionMinutes30).text("30");

  let newOptionMinutes45 = $("<option value=45>");
  $(newOptionMinutes45).text("45");

  newSelectMinutes.append(
    newOptionMinutes00,
    newOptionMinutes15,
    newOptionMinutes30,
    newOptionMinutes45
  );
  // New Day
  let newDay = $("<div>");
  $(newDay).addClass("row new-day");
  $(".select-hours-minutes").append(newDay);

  $(newDay).append(newWeekDate);
  $(newDay).append(newHourAvailability);
  $(newDay).append(newMinuteAvailability);
}
