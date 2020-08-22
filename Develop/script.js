const m = moment();
const m2 = m.format("dddd, MMMM Mo");
const pCurrent = document.getElementById("currentDay");

pCurrent.innerHTML = m.format("dddd, MMMM Mo");

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };