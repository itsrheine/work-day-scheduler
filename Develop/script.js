var m = moment();
var pCurrent = document.getElementById("currentDay");

// time header
pCurrent.innerHTML = moment().format("LLLL")

var wdHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var hour = function() {
    for (let i = 0; i < wdHours.length; i++) 
}

// Column 3 
    // create task
var createTask = function(taskText, taskTime, taskList) {
    // elements
    var taskLi = $("#textarea").addClass("list-tasks");
    var taskP = ("#textarea").text(taskText);
    var taskTime = $("#time").text(taskTime);

    // append taskP and taskTime
    taskLi.append(taskP, taskTime);

    // check due date
    auditTask(taskLi);

    // append to the page
    $("#textarea" + taskList).append(taskLi);
};

    // auditing tasks - color change
var auditTask = function() {

    if (currentwHour > wdHours[i]) {
        textarea.addClass("bg-warning readonly");
    } 
    else if (currentwHour === wdHours[i]) { 
        textarea.addClass("bg-danger text-white");
    } 
    else if (currentwHour < wdHours[i]) { 
        textarea.addClass("bg-success text-white");
    }
};

    // loading tasks
var loadTasks = function() {
    tasks = localStorage.getItem("tasks");
};

    // When save button is clicked
$("#task-modal .saveBtn").on("click", function() {
    // values
    var taskText = $("#textarea").val();
    var saveText = localStorage.setItem("textarea" + i, taskText);
        textarea.taskText(saveText);
});
















// variables
// var scheduler = document.getElementsById("scheduler");
// var column1 = document.getElementsById("column1");
// var column2 = document.getElementById("column2");

// // Scheduler Box Below - 1st Column
// var wdHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// var timeNow = m.hour();

// // // schedulerBox = function() {
// //     console.log("in scheduler function")

// column1 = function() {
//     for (let i = 0; i < wdHours.length; i++) {
//         // if-else statement
//         var currentwHour = wdHours[i] + "P.M." 
//         if (wdHours[i] <= 11) {
//             currentwHour = wdHours[i] + "A.M."
//         }
//         else if (wdHours[i] > 12) {
//             currentwHour = (wdHours[i] - 12) + "P.M."
//         }
//     };

//     // Entry Area - 2nd Column
//     column2 = function() {
//         if (currentwHour > wdHours[i]) {
//             textarea.addClass("bg-warning readonly");
//         } 
//         else if (currentwHour === wdHours[i]) { 
//             textarea.addClass("bg-danger text-white");
//         } 
//         else if (currentwHour < wdHours[i]) { 
//             textarea.addClass("bg-success text-white");
//     };

//     // Save Button - 3rd Column - Local Storage
//     var entry = $("#textarea" + i).val(); 
//     var newEntry = localStorage.getItem("textarea" + i, entry);
//         textarea.entry(newEntry);
    
//     saveTask = 
//         console.log("entry", entry)
//         // presenting score and highpoints together
//         const val = {
//             name: newEntry.value
//     }
//     // update the savedtasks
//     localStorage.setItem("newEntry" + i, entry);
//     textarea.text(newEntry);
