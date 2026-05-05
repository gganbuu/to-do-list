export const renderTaskStrikethroughToggle = (taskId) => {
    const listContainer = document.querySelector(`[data-task-id="${taskId}"]`)
    listContainer.classList.toggle("text-decoration-line-through")
}