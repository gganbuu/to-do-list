import { createTaskComponent } from "../components/createTaskComponent.js"

export const renderAddItem = (listId, item) => {
    // select all listcontainers, then filter to get the listcontainer 
    // that matches the id
    let listContainers = document.querySelectorAll(".list-container")
    let listContainer = [...listContainers].filter(element => element.dataset.listId === listId)[0]
    
    // create new elements and append to container with matching list id 
    const taskContainer = createTaskComponent(item)
    
    //get addbutton from list container, insert the task container before add button
    const addButton = listContainer.querySelector("#add-item-button").parentElement
    listContainer.insertBefore(taskContainer, addButton)

}