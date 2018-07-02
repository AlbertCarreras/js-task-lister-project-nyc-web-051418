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

  function appendTaskListener() {
    const submitTaskBtn = document.getElementById("submitTaskButton");
    const newTaskDescription = document.getElementById("new-task-description");
    const newPriorityLevel = document.getElementById("new-task-priority");
    const newChosenListOption = document.getElementById("parent-list");

    function deleteTaskButton(chosenListOption,taskDescription) {
      const taskDeleteButton = document.querySelector(`[data-list-title="${chosenListOption}"][data-task-name="${taskDescription}"]`);
      taskDeleteButton.addEventListener('click',event=> {
        event.target.parentElement.remove()
      })
    }

    submitTaskBtn.addEventListener('click', event => {
      const taskDescription = newTaskDescription.value;
      const priorityLevel = newPriorityLevel.value;
      const chosenListOption = newChosenListOption.value;
      const newTask = new TaskLister(chosenListOption, taskDescription, priorityLevel);
      newTask.buildTask();
      deleteTaskButton(chosenListOption,taskDescription)
    })
  }

  function deleteListButton(listName) {
    const listDeleteButton = document.querySelector(`[data-title="${listName}"]`);
    listDeleteButton.addEventListener('click',event=> {
      event.target.parentElement.parentElement.remove();
    })
  }

  function createTaskForm(listName) {
    const taskFormQuery = document.getElementById('create-task-form')
    if (taskFormQuery) {
      appendTaskOptions(listName);
    } else {
      const newTaskForm = new Task(listName);
      newTaskForm.buildTask();
      appendTaskListener();

    }
  }

  submitListBtn.addEventListener('click', event => {
    event.preventDefault();
    listName = listText.value;
    const newList = new List(listName);
    newList.buildList();
    createTaskForm(listName);
    deleteListButton(listName);
  })


// const app = new TaskLister();
});
