var m = moment();
var pCurrent = document.getElementById("currentDay");

// time header
pCurrent.innerHTML = moment().format("LLLL")

// variables
var scheduler = document.getElementsById("scheduler");
var column1 = document.getElementsById("time");
var column2 = document.getElementById("column2");

// Scheduler Box Below - 1st Column
var wdHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeNow = m.hour();

schedulerBox = function() {
    for (let i = 0; i < wdHours.length; i++) {
        // if-else statement
        var currentwHour = wdHours[i] + "P.M." 
        if (wdHours[i] <= 11) {
            currentwHour = wdHours[i] + "A.M."
        }
        else if (wdHours[i] > 12) {
            currentwHour = (wdHours[i] - 12) + "P.M."
        };

    // Entry Area - 2nd Column
    column2 = function() {
        if (currentwHour > wdHours[i]) {
            textarea.addClass("bg-warning readonly");
        } 
        else if (currentwHour === wdHours[i]) { 
            textarea.addClass("bg-danger text-white");
        } 
        else if (currentwHour < wdHours[i]) { 
            textarea.addClass("bg-success text-white");
    };

    // Save Button - 3rd Column - Local Storage
    var entry = $("#textarea" + i).val(); 
    var newEntry = localStorage.getItem("textarea" + i, entry);
        textarea.entry(newEntry);
    
    $(".saveBtn").on("click", function() {
        // presenting score and highpoints together
        const val = {
            name: newEntry.value
    }
    // update the savedtasks
    localStorage.setItem("newEntry" + i, entry);
    textarea.text(newEntry);
};

schedulerBox();