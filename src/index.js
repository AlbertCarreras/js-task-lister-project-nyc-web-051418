document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const submitBtn = document.getElementById("submitButton");
  const listText = document.getElementById("new-list-title");
  submitBtn.addEventListener('click', event => {
    event.preventDefault();
    listName = listText.value;
    const newList = new List(listName);
    newList.buildList();
    
    const newTaskForm = new Task(listName);
    newTaskForm.buildTask();
  })

// const app = new TaskLister();
});
