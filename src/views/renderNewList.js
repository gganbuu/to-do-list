import { renderAddItem } from "./renderAddItem.js"
import { createListComponent } from "../components/createListComponent.js"

export const renderNewList = (list, mainListsContentContainer) => {
    //create listcontainer 
    const listContainer = createListComponent(list)

    //add tasks to list container
    mainListsContentContainer.appendChild(listContainer)
} 

// this function creates the core view of new list, taking in a lists title, description, id and mainlistcontentcontainer as parameters

    //check if list is empty
    // if (list.getLength() > 0) {
    //     //get list items
    //     let tasks = list.getList()
    //     // for each item in list
    //     tasks.forEach(element => renderAddItem(list.getID(), element))
    //     //  renderitem
    // }
    // maybe just make render add items 