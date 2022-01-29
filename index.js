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
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);

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
});

//TASK 5
// Finding and Display the Date Object
const dateElement = document.querySelector("#date-element");
let today = new Date();
const [month, day, year] = [today.getMonth(), today.getDate(), today.getFullYear()];
let dateString = `Current Date: ${day} / ${month} / ${year}`;
dateElement.innerHTML = dateString;



//DONT USE THIS CODE!!!
/*const taskName = document.querySelector("#taskname");
const taskDescription = document.querySelector("#taskdescription");
const taskAssign = document.querySelector("#taskassign");
const taskDate = document.querySelector("#taskdate");
const taskStatus = document.querySelector("#taskstatus");
btnSubmit.addEventListener("click", validFormFieldInput);

function validFormFieldInput(data) { 
    if (taskName==null || taskName==""){  
        errorMessage("Name can't be blank");  
        return false;  
      } else { (taskName.length<5)   
        errorMessage("Password must be at least 5 characters long.");  
        return false;  
        }  
      } */


      /*const validateFields = (fields) => {
        let fieldValues = [
          taskname.value,
          taskdescription.value,
          taskassign.value,
          taskstatus.value,
          taskdate.value,
        ];
      
        // Validates first 3 fields for length < 5
        for (let i = 0; i < 3; i++) {
          if (fieldValues[i] === "" || fieldValues[i].length < 5) {
            fields[i].classList.remove("is-valid");
            fields[i].classList.add("is-invalid");
            invalidFields++;
          } else {
            fields[i].classList.remove("is-invalid");
            fields[i].classList.add("is-valid");
          }
        }

        // Validates first 3 fields for length < 5
        for (let i = 0; i < 3; i++) {
          if (fieldValues[i] === "" || fieldValues[i].length < 5) {
            fields[i].classList.remove("is-valid");
            fields[i].classList.add("is-invalid");
            invalidFields++;
          } else {
            fields[i].classList.remove("is-invalid");
            fields[i].classList.add("is-valid");
          }
        }*/