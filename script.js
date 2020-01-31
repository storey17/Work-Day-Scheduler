$(document).ready(function() {

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    $("#currentDay").append(new Date());
    // console.log($("#currentDay").append(new Date()));
    var currentTime = new Date().getHours(); 

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

$("textarea").each(function(i) {
    var currentTimeBlock = $(this).attr("data-attribute");
    console.log( i + ": " + $(this).attr("data-attribute"));
    if (currentTime == currentTimeBlock) {
        $(this).attr("class", "present")
    } else if (currentTime > currentTimeBlock) {
        $(this).attr("class", "past")  
    } else {
        $(this).attr("class", "future")  
    }
});

// WHEN I click into a timeblock
// THEN I can enter an event

// // WHEN I click the save button for that timeblock
// // THEN the text for that event is saved in local storage


$( ".saveBtn" ).click(function() {
    var timeBlock = $(this).attr("data-time");
    // var $("textarea[data-attribute='"+timeBlock+"']")

    var textAreaInput = $("textarea").val()
    console.log(textAreaInput);
  });



// localStorage.
// JSON.stringify
// JSON.parse

// // WHEN I refresh the page
// // THEN the saved events persist
// .persist()

});
