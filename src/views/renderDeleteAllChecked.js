import { renderNewList } from "./renderNewList.js"
import { createListComponent } from "../components/createListComponent.js"
export const renderDeleteAllChecked = (myLists, mainListsContentContainer) => {
    // this function will re-render all the objects on page
    // so that the removed lists will show up on the dom
    
    // get the list of all listIds
    const listsNode = document.querySelectorAll(".list-container")
    const listsArray = [...listsNode] 
    const listIdsArray = listsArray.map(list => list.dataset.listId)
   
    
    // delete list DOM elements on screen
    listsNode.forEach(element => element.remove());

    // regenerate dom with all lists that were on screen:
    // 1. loop through listIds array
    // 2. get list element
    // 3. store returned list component in list container
    // 4. append list container to main list
    listIdsArray.forEach((element) => {
        let list = myLists.findID(element)
        const listContainer = createListComponent(list)
        mainListsContentContainer.append(listContainer)
    })
}