var tasks = [];
class TaskManager {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.task = {};
    };
    
    addTask(id, name, description, assignedTo, dueDate, status) {
      let currid = id == 0 ? this.currentId++: id;
        // Create a task object that we will push to the list of tasks
       this.task = {
          id: currid,
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
        };
        if(id == 0) {
          tasks.push(task);
        } else {
          let tempArray = [];
          for(let i = 0; i < tasks.length; i++) {
            let obj = tasks[i];
            if(obj.id == id) {
              obj = this.task;
              $('#Row-' +id).remove();
            }
            tempArray.push(obj);
          }
          tasks = tempArray;
        }  
    }
    
    render(index = 0) {
      let min = 0;
      console.log("index:" + index);
      if(index === -1) {
        min = 0;
      } else {
        min = tasks.length - 1;
      }
      console.log("min:" + min + ":tasks:" + tasks.length + "---" + JSON.stringify(tasks));
      for (let i = min; i < tasks.length; i++) {
        let tk = tasks[i];
        let row = '<li class="list-group-item" id="Row-' + tk.id + '">' +
          '<div class="card bg-light">' +
          '<div class="card-body">' +
          '<span class="badge badge-success"><label id="Status-' + tk.id + '">' + tk.status + '</label></span>' +
          '<h5 class="card-title"> Task: ' + tk.name + '</h5>' + 
          '<p class="card-text">Description: ' + tk.description + '</p>' +
          '<p class="card-text font-weight-bold">Assigned To: ' + tk.assignedTo + '</p>' +
          '<p class="card-text">Due Date: ' + tk.dueDate + '</p>' +
          '<p class="card-text">Status: <label id="St-' + tk.id + '">' + tk.status + '</label></p>' +
          '<button type="button" class="btn btn-primary" id="BtnDn-' + tk.id + '" onClick="completeTask(\'' + tk.id+ '\')">Mark as Done</button>' +
          "&nbsp;&nbsp;&nbsp;&nbsp;" +
          '<button type="button" class="btn btn-danger" id="BtnDn-' + tk.id + '" onClick="deleteTask(\'' + tk.id+ '\')">Delete</button>' +
          "&nbsp;&nbsp;&nbsp;&nbsp;" +
          '<button type="button" class="btn btn-primary" id="BtnDn-' + tk.id + '" onClick="updateTask(\'' + tk.id+ '\')">Update</button>' +
          '</div>' +
          '</div>' +
          '</li>';
          $(".list-group").append(row);
        }
      }

    save() {
      // Create a JSON string of the tasks
      localStorage.removeItem(tasks);
      const tasksJson = JSON.stringify(tasks);
      // Store the JSON string in localStorage
      localStorage.setItem("tasks", tasksJson);
      // Convert the currentId to a string;
      const currentId = String(this.currentId);
      // Store the currentId in localStorage
      localStorage.setItem("currentId", currentId);
    }
  
    load() {
      // Check if any tasks are saved in localStorage
      if (localStorage.getItem("tasks")) {
        // Get the JSON string of tasks in localStorage
        let tasksJson = localStorage.getItem("tasks");
        //alert(JSON.parse(tasksJson).length);
        let t = JSON.parse(tasksJson);
        // Convert it to an array and store it in our TaskManager
        for(let i =0; i < t.length; i++ ) {
          tasks.push(t[i]);
        }
      }
      // Check if the currentId is saved in localStorage
      if (localStorage.getItem("currentId")) {
        // Get the currentId string in localStorage
        let currentId = localStorage.getItem("currentId");
  
        // Convert the currentId to a number and store it in our TaskManager
        this.currentId = Number(currentId);
      }
    }
  }

  const completeTask = (id) => {
    console.log("CompleteTask:" + id);
    $('#Status-' +id).text("Done");
    $('#St-' +id).text("Done");
    $('#BtnDn-' +id).addClass("done-button");
    let tempArr = [];
    for(let i = 0; i < tasks.length; i++) {
      let obj = tasks[i];
      if(obj.id == id) {
        obj.status = "Done";
      }
      tempArr.push(obj);
    }
    let tm = new TaskManager();
    tm.save();
  }

  const deleteTask = (id) => {
    $('#Row-' +id).remove();
    let tempArr = [];
    for(let i = 0; i < tasks.length; i++) {
      let obj = tasks[i];
      if(obj.id != id) {
        tempArr.push(obj);
      }
    }
    tasks = tempArr;
    let tm = new TaskManager();
    tm.save();
  }

  const updateTask = (id) => {
    for(let i = 0; i < tasks.length; i++) {
      let obj = tasks[i];
      if(obj.id == id) {
        $("#id-hidden-value").val(obj.id);
        $("#new-task-name").val(obj.name);
        $("#new-task-description").val(obj.description);
        $("#new-task-assigned-to").val(obj.assignedTo);
        $("#new-task-due-date").val(obj.dueDate);
        $("#new-task-status").val(obj.status);
        break;
      }
    }
    $('#exampleModal').modal();
  }

  const clearFormFields = () => {
    $("#id-hidden-value").val("0");
    $("#new-task-name").val("");
    $("#new-task-description").val("");
    $("#new-task-assigned-to").val("");
    $("#new-task-due-date").val("");
    $("#new-task-status").val("");
  }
