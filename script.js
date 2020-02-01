$(document).ready(function() {

var timeBlock;

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    $("#currentDay").append(new Date());
    var currentTime = new Date().getHours(); 

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
$("textarea").each(function(i) {
    var currentTimeBlock = $(this).attr("data-attribute");
    if (currentTime == currentTimeBlock) {
        $(this).attr("class", "present")
    } else if (currentTime > currentTimeBlock) {
        $(this).attr("class", "past")  
    } else {
        $(this).attr("class", "future")  
    }

// // WHEN I refresh the page
// // THEN the saved events persist
    var retrievedLocalStorage = localStorage.getItem(currentTimeBlock);
    $(this).val(retrievedLocalStorage);
});

// // WHEN I click the save button for that timeblock
// // THEN the text for that event is saved in local storage
$( ".saveBtn" ).click(function() {
    timeBlock = $(this).attr("data-time");
    var value = $("textarea[data-attribute='"+timeBlock+"']").val();
    localStorage.setItem(timeBlock, value);
  });

});
