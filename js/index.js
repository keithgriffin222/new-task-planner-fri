// TASK 4

const taskForm = document.querySelector("#taskForm");

//console.log(taskForm.value);

taskForm.addEventListener("submit", (event) => {
  const idHidden = document.querySelector("#id-hidden-value");
  const validateName = document.querySelector("#new-task-name");
  const validateDescription = document.querySelector("#new-task-description");
  const validateAssignedTo = document.querySelector("#new-task-assigned-to");
  const validateDueDate = document.querySelector("#new-task-due-date");
  const validateStatus = document.querySelector("#new-task-status");
  let validationFail = 0;

  event.preventDefault();
  event.stopPropagation();
  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate);
  console.log("Task Status:" + validateStatus);

// Form validation for Task Name Field min length 5
if (validateName.value.length > 5) {
  validateName.classList.add("is-valid");
  validateName.classList.remove("is-invalid");
} else {
  validateName.classList.add("is-invalid");
  validateName.classList.remove("is-valid");
  validationFail++;
}

 // Form validation for Task Description Field min length 5
 if (validateDescription.value.length > 5) {
  validateDescription.classList.add("is-valid");
  validateDescription.classList.remove("is-invalid");
} else {
  validateDescription.classList.add("is-invalid");
  validateDescription.classList.remove("is-valid");
  validationFail++;
}

// Form validation for Task Assigned Field min length 5
if (validateAssignedTo.value.length > 5) {
  validateAssignedTo.classList.add("is-valid");
  validateAssignedTo.classList.remove("is-invalid");
} else {
  validateAssignedTo.classList.add("is-invalid");
  validateAssignedTo.classList.remove("is-valid");
  validationFail++;
}  
// Form validation for Due Date Field not empty
// try your own validation for a date in the future
if (validateDueDate.value) {
  validateDueDate.classList.add("is-valid");
  validateDueDate.classList.remove("is-invalid");
} else {
  validateDueDate.classList.add("is-invalid");
  validateDueDate.classList.remove("is-valid");
  validationFail++;
}
// Form validation for Task Status Field not empty
if (validateStatus.value) {
  validateStatus.classList.add("is-valid");
  validateStatus.classList.remove("is-invalid");
} else {
  validateStatus.classList.add("is-invalid");
  validateStatus.classList.remove("is-valid");
  validationFail++;
}
// If validation fails then function will not proceed further and
// will return. The value of validationFail will also needed to be
// reset to 0.
// ----------------------------------------------------------------------------------
if (validationFail > 0) {
  validationFail = 0;
  return;
}
const sameer = new TaskManager((new Date()).getTime());
sameer.addTask(idHidden.value, validateName.value, validateDescription.value, validateAssignedTo.value, validateDueDate.value, validateStatus.value);
sameer.save(idHidden);
console.log(sameer.tasks);
sameer.render();
clearFormFields();
$('#exampleModal').modal('hide');
}); //

//TASK 5
// Finding and Display the Date Object
const dateElement = document.querySelector("#date-element");
let today = new Date();
const [month, day, year] = [today.getMonth() +1, today.getDate(), today.getFullYear()];
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;
console.log("Date"+dateElement);

    //taskManager.render();

  // Create the tasksHtml by joining each item in the tasksHtmlList
  // with a new line in between each item.
  //const tasksHtml = tasksHtmlList.join("\n");

  // Set the inner html of the tasksList on the page
  //const tasksList = document.querySelector("#task-list");
  //tasksList.innerHTML = tasksHtml;
  

