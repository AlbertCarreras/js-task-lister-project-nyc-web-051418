document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const submitListBtn = document.getElementById("submitListButton");
  const listText = document.getElementById("new-list-title");

  function appendTaskOptions(listName) {
    const selectList = document.getElementById('parent-list')
    const newOption = document.createElement('OPTION');
    newOption.value = listName;
    newOption.innerHTML = listName;
    selectList.appendChild(newOption);
  }

  function appendListener() {
    const submitTaskBtn = document.getElementById("submitTaskButton");
    const newTaskDescription = document.getElementById("new-task-description");
    const newPriorityLevel = document.getElementById("new-task-priority");
    submitTaskBtn.addEventListener('click', event => {
      const taskDescription = newTaskDescription.value;
      const priorityLevel = newPriorityLevel.value;
      const newTask = new TaskLister(taskDescription,priorityLevel);
    })
  }

  function createTaskForm(listName) {
    const taskFormQuery = document.getElementById('create-task-form')
    if (taskFormQuery) {
      appendTaskOptions(listName);
    } else {
      const newTaskForm = new Task(listName);
      newTaskForm.buildTask();
      appendListener();

    }
  }

  submitListBtn.addEventListener('click', event => {
    event.preventDefault();
    listName = listText.value;
    const newList = new List(listName);
    newList.buildList();
    createTaskForm(listName);
  })


// const app = new TaskLister();
});
