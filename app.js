const form = document.querySelector('form'); //select the form tag
const taskList = document.querySelector('#task-list'); //select the section tag where new ul will be
const input = document.querySelector('input');


form.addEventListener('submit', function(e){ //adding an action everytime we submit
    e.preventDefault(); //prevents page change everytimewe submit form
    const newTask = document.querySelector("#task-name"); //selecting the input tag by ID name
    const newLi = document.createElement("li"); //created an empty Li to add to
    const newBtn = document.createElement("button");//created a element button to add on to our new li
    
    
    newLi.innerText = newTask.value; // the text added to our new Li will now be visible to the user as the value of our new task
    newBtn.innerText = "x" //created a user interface delete button

    taskList.addEventListener("click", function(event){ //created an event delegation using the parent (taskList)
        const clickedList = event.target;

        if(event.target.tagName === 'BUTTON'){ //if the tag name is a button in our event object
            event.target.parentElement.remove(); //then we will target the parentElement and remove it
        }

        if (!clickedList.isCompleted) {
            clickedList.style.textDecoration = "line-through";
            clickedList.isCompleted = true;
          } 
        
        else {
            clickedList.style.textDecoration = "none";
            clickedList.isCompleted = false;
          }
         
    })
    newLi.append(newBtn); //added the delete button to the end of our Li
    taskList.append(newLi); //added our new Li to the end of our task list
    input.value = ''; //clear input box everytime we add a task

     
   
    localStorage.setItem("task", JSON.parse(taskList));
}) 