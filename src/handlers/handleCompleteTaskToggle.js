export const handleCompleteTaskToggle = (myLists, listId, taskId) => {
    let list, task
    list = myLists.findID(listId)
    task = list.findID(taskId)
    task.toggleCompletion()

}