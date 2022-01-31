// TASK 4

const taskForm = document.querySelector("#taskForm");

//console.log(taskForm.value);

taskForm.addEventListener("submit", (event) => {
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
sameer.addTask(validateName.value, validateDescription.value, validateAssignedTo.value, validateDueDate.value, validateStatus.value);
console.log(sameer.tasks);
console.log(sameer.tasks[0].task.name);
let row = '<li class="list-group-item" id="Row-' + sameer.tasks[0].task.id + '">' +
        '<div class="card bg-light">' +
        '<div class="card-body">' +
        '<span class="badge badge-success">' + sameer.tasks[0].task.status + '</span>' +
        '<h5 class="card-title"> Task:' + sameer.tasks[0].task.name + '</h5>' + 
        '<p class="card-text">Discription:' + sameer.tasks[0].task.description + '</p>' +
        '<p class="card-text font-weight-bold">Assigned To:' + sameer.tasks[0].task.assignedTo + '</p>' +
        '<p class="card-text">Due Date:' + sameer.tasks[0].task.dueDate + '</p>' +
        '<p class="card-text">Status:' + sameer.tasks[0].task.status + '</p>' +
        '<button type="button" class="btn btn-primary">Edit</button>' +
        '<button type="button" class="btn btn-danger">Delete</button>' +
        '</div>' +
        '</div>' +
        '</li>';
        $(".list-group").append(row);
});

//TASK 5
// Finding and Display the Date Object
const dateElement = document.querySelector("#date-element");
let today = new Date();
const [month, day, year] = [today.getMonth() +1, today.getDate(), today.getFullYear()];
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;
console.log("Date"+dateElement)

//Task 6

