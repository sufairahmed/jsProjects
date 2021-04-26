// Define UI element
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');

/*======================
Define Event Listeners
======================*/
// if click in the submit then a function will call name "addTask"
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
/*======================
    Define Functions
======================*/
// Add task 
function addTask(e) {
    e.preventDefault();
    if(taskInput.Value === '') {
        alert('Add a Task!');
    } else {
        //Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        // add across button 
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML= 'X';
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Remove Task
function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm('Are you sure?')){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}

// Clear Task
function clearTask(e){
    // taskList.innerHTML = '';

    // Faster way of delete
     while(taskList.firstChild){
         taskList.removeChild(taskList.firstChild);
     }
     filter.value = '';
}

// Filter Task
function filterTask(e){
    let text = e.target.value.toLowerCase();

    // bring all document form the list
    document.querySelectorAll('li').forEach(task => {
        
        let item = task.firstChild.textContent; // we check only inthe text content.
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'bolck';
        }else{
            task.style.display = 'none';
        }
    })
}
// local Storage 