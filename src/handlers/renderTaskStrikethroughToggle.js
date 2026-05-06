export const renderTaskStrikethroughToggle = (taskId) => {
    // select taskContainer 
    const taskContainer = document.querySelector(`[data-task-id="${taskId}"]`)
    const taskTitle = taskContainer.querySelector('.task-title')
    taskTitle.classList.toggle("text-decoration-line-through")
}