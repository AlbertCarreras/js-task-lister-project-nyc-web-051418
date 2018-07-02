class Task {
  // your code here
  constructor (listName) {
    this.listName = listName;
    this.formHTML = `<form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">

        <option value= "${listName}" selected>
          "${listName}"
        </option>
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task" id="submitTaskButton">
      </form>`
  }

buildTask () {
  let appContent = document.getElementById('app-content');
  appContent.innerHTML += this.formHTML;

}

addToList() {

}


}
