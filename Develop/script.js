var tasks = [];

// Display the current day at the top of the page
$("#currentDay").append(moment().format("LLLL"));

// populates textareas with respective tasks from local storage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if local storage is empty, create new array
    if (!tasks) {
        tasks = [];
    }

    // Loop through localStorage
    for (i = 0; i < tasks.length; i++) {
        
        var taskId = tasks[i].taskSpan;
        var taskEntry = $("#" + taskId);
        taskEntry.val(tasks[i].text);
    }
};

// Function to save tasks to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

// I need to create a function to save the shiz to local storage
$(".row").on("click", ".saveBtn", function() {
    // Grab the text from the task input
    newTask = $(this).prev();
    taskId = newTask.attr("id");
    
    tasks.push({
        text: newTask.val().trim(),
        taskSpan: taskId
    });

    saveTasks();
});

// Color Code Time Blocks - Past, Present, Future
var auditTask = function() {
    
    // loop through time
    for (i = 1; i < 10; i++){
    
    //
    var timeBlock = $("#row" + i).find("p").html();
    
    // Grab time to convert to an object
    var timeObj = moment(timeBlock, "HHA");
    
    // Convert time to military hours and declare current time
    var wdHour = timeObj.format("HH");
    var currentTime = moment().format("HH");

    // Determine gap between now and task entered
    var timeGap = currentTime - wdHour;

    // Variable for changing colors
    var colorChange = $("#row" + i).find("textarea");

    // Color labels change depending on time
    if (currentTime === wdHour) {
        colorChange.removeClass("past future");
        colorChange.addClass("present");
    } 
    else if (timeGap > 0) {
        colorChange.removeClass("future present");
        colorChange.addClass("past");
    } 
    else if (timeGap < 0){
        colorChange.removeClass("past present");
        colorChange.addClass("future");
    } 
}
};

// Check task statuses every 5 minutes
setInterval(function() {
    auditTask();
}, 10);

loadTasks();
auditTask();