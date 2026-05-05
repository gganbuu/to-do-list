import { createToDoList } from '../models/to-do-list.js'


export const handleNewList = () => {
    const title = "new list"
    const description = "new description"
    return createToDoList(title, description)
}

// This function handles the creation of the new list element.
// it returns the ToDoList object