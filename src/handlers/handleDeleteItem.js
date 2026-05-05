export const handleDeleteItem = (myLists, listId, taskId) => {
    let list, task, index
    
    //get list object from lists
    list = myLists.findID(listId)
    
    //get task object
    task = list.findID(taskId)

    //get index of task object 
    index = list.getIndexOf(task)

    //delete index
    list.deleteIndex(index)

}