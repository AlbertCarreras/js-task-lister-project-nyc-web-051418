class TaskLister {
  constructor(chosenListOption, taskDescription, priorityLevel) {
    this.chosenListOption = chosenListOption;
    this.taskDescription = taskDescription;
    this.priorityLevel = priorityLevel;
    this.task = `<li>
        Task: "${this.taskDescription}"
        <button data-list-title="doughnuts" data-task-name="${this.taskDescription}" class="delete-task">
            X
        </button>
        <br>
        Priority: "${this.priorityLevel}"
      </li>`
  }

  buildTask() {
    const ulEl = document.getElementById(this.chosenListOption);
    ulEl.innerHTML += this.task;
  }

}
