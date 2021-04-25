// Define UI element
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#new_task');

/*======================
Define Event Listeners
======================*/
// if click in the submit then a function will call name "addTask"
form.addEventListener('submit', addTask);

/*======================
    Define Functions
======================*/
// Add task 
function addTask(e) {
    if(taskInput.Value === '') {
        alert('Add a Task!');
    } else {
        //Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
    }
}