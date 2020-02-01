# Work-Day-Scheduler_HW-5
PURPOSE
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


FUNTIONALITY
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
    $("#currentDay").append(new Date());
    var currentTime = new Date().getHours(); 

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
    Manually added in divs for each timeblock from 9am to 5pm.

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    $("textarea").each(function(i) {
    var currentTimeBlock = $(this).attr("data-attribute");
    if (currentTime == currentTimeBlock) {
        $(this).attr("class", "present")
    } else if (currentTime > currentTimeBlock) {
        $(this).attr("class", "past")  
    } else {
        $(this).attr("class", "future")  
    }

WHEN I click into a timeblock
THEN I can enter an event
    Added text area in html for this. 

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
    $( ".saveBtn" ).click(function() {
    timeBlock = $(this).attr("data-time");
    var value = $("textarea[data-attribute='"+timeBlock+"']").val();
    localStorage.setItem(timeBlock, value);
  });

WHEN I refresh the page
THEN the saved events persist
       *I included the below within the ("textarea").each(function(i) function so that the 'this' refers to the textblock that was typed in. 
       var retrievedLocalStorage = localStorage.getItem(currentTimeBlock);
        $(this).val(retrievedLocalStorage);
