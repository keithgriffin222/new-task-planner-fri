class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
        
    };
    
    addTask(name, description, assignedTo, dueDate, status) {
        // Create a task object that we will push to the list of tasks
        
        const  task = {
        
          id: this.currentId++,
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
          
        };

        
    
        this.tasks.push({ task });
      }
    }
    

   



