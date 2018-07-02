document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const submitBtn = document.getElementById("submitButton");
  const listText = document.getElementById("new-list-title");
  submitBtn.addEventListener('click', event => {
    listName = listText.value;
    const newList = new List(listName);
    debugger
  })
  // const app = new TaskLister();
});
