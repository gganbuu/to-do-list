export const renderDeleteItem = (taskId) => {
    let items = document.querySelectorAll(".task-container")
    let item = [...items].filter(element => element.dataset.taskId === taskId)[0]
    item.remove()
}