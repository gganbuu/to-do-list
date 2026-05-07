export const createTaskComponent = (item) => {
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("d-flex", "align-items-center", "gap-3", "mt-4", "ms-4", "w-25", "task-container")
    taskContainer.dataset.taskId = item.getID()

    const taskCheckbox = document.createElement("input")
    taskCheckbox.classList.add("form-check-input", "fs-4", "rounded-circle", "shadow-none", "m-0")
    taskCheckbox.id = "checkbox-button"
    taskCheckbox.type = "checkbox"
    taskCheckbox.checked = item.getCompletion()
    taskContainer.appendChild(taskCheckbox)

    const taskTitle = document.createElement("input")
    taskTitle.classList.add("form-control", "border-0", "py-1", "task-title")
    taskTitle.type = "text"
    taskTitle.placeholder = item.getTitle()
    taskContainer.appendChild(taskTitle)

    const binButton = document.createElement("i")
    binButton.classList.add("bi", "bi-trash3", "d-none", "hidden-content")
    binButton.id = "delete-item-button"
    taskContainer.appendChild(binButton)

    const threeDotsButton = document.createElement("i")
    threeDotsButton.classList.add("fa-solid", "fa-ellipsis", "d-none", "hidden-content")
    taskContainer.appendChild(threeDotsButton)

    return taskContainer

}

// this module creates a task component taking item object as a parameter
// after building the task container it returns it to be appended to the appropriate list container