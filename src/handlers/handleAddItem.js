import { createToDoListItem } from '../models/to-do-list-item.js'
export const handleAddItem = (lists, id) => {
    //find list object in lists collection
    let list = lists.findID(id)

    // create new task list item
    let newItem = createToDoListItem({title: "add title", description: "add description"})
    
    //add new to-do-list item to to-do-list list 
    list.addItem(newItem)

    // return new task item
    return newItem
}
