console.log("Task Manager")

let tasks = ["Workout", "Study", "Read", "Practise football"];
let completed = [true, true, false, false];

function addTask(taskDescription) {
    tasks.push(taskDescription);
    completed.push(false);
    console.log("Added: " + taskDescription + " to tasks!")

}

function completeTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        completed[taskindex] = true;
        console.log("Completed " + tasks[taskIndex] + "!")
    } else {
        console.log("Task index " + taskIndex + "not found.");
    }
}

function showAllTasks() {
    console.log("Your tasks: ");
    if(tasks.length === 0) {
        console.log(" No tasks yet! Add som tasks to get started.");
        return;
    }

    for (let i=0; i < tasks.length; i++) {
        let status = completed[i] ? "✅" : "⭕";
        console.log(status + " [" + i + "] " + tasks [i]);
    }

}

function countRemainingTasks() {
    let remaining = 0;
    for (let i=0; i < completed.length; i++) {
        if (completed[i] === false) {
            remaining++;
        }
    }
    console.log("Tasks remaining: " + remaining);
    return remaining;
}


