class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
        
    };
    
    addTask(name, description, assignedTo, dueDate, status) {
        // Create a task object that we will push to the list of tasks
        
        const  task = {
          // Increment the current Id for each new task
          id: currentId++,
          name: 'CleaningClean the Kitchen',
          description: 'Sweep the floor, clean the pans and wipe the tables.',
          assignedTo: 'John',
          dueDate: '10/5/2022',
          status: 'To Do',
        };

          const  task1 = {
    
            id: currentId++,
            name: 'Fill the soda machine',
            description: 'Fill it with Coke, Sprite, Fanta & water.',
            assignedTo: 'Mandy',
            dueDate: '10/7/2022',
            status: 'To Do',
          };

          const  task2 = {
        
            id: currentId++,
            name: 'Stock the ingredients',
            description: 'Stock the fridge and cupboards.',
            assignedTo: 'Kyle',
            dueDate: '11/9/2022',
            status: 'To Do',
          };

          const  task3 = {
            // Increment the current Id for each new task
            id: currentId++,
            name: 'Cook the burgers',
            description: 'Fry the patties and organise the burger indredients in the correct order.',
            assignedTo: 'Sarah',
            dueDate: '11/20/2022',
            status: 'To Do',
          };

          const  task4 = {
            // Increment the current Id for each new task
            id: currentId++,
            name: 'Serve the customers',
            description: 'Take the orders from the customers and serve them food.',
            assignedTo: 'John',
            dueDate: 'Daniel',
            status: 'To Do',
          };
    
        this.tasks.push({ task });
      }
    }
    

const kevin = new TaskManager
console.log(kevin.tasks)



