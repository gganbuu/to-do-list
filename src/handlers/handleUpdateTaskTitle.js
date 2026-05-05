

export const handleUpdateTaskTitle = (myLists, listId, taskId, textInput) => {
    // find list object in lists collection
    let list = myLists.findID(listId)

    //find task object in list object
    let task = list.findID(taskId)

    // find set title
    task.setTitle(textInput)

    // console.log(task.getTitle())

    // console.log(list.getLength())
}