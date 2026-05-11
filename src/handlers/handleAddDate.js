export const handleAddDate = (myLists, listId, taskId, dueDate) => {
    // get list from myLists
    const list = myLists.findID(listId)
    
    // get task from list
    const task = list.findID(taskId)
    
    task.setDueDate(dueDate)

    console.log(task.getTitle())
    console.log(task.getDueDate())
}