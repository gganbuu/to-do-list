// Import our custom CSS
import '../scss/styles.scss'

//import fontawesome and icons
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'


// import object structures
import { createToDoListItem } from '../models/to-do-list-item.js'
import { createToDoList } from '../models/to-do-list.js'
import { createToDoListCollection } from '../models/to-do-list-collection.js'

//import handlers
import { handleNewList } from '../handlers/handleNewList.js'
import { handleAddItem } from '../handlers/handleAddItem.js'
import { handleDeleteItem } from '../handlers/handleDeleteItem.js'
import { handleUpdateListTitle } from '../handlers/handleUpdateListTitle.js'
import { handleUpdateListDescription } from '../handlers/handleUpdateListDescription.js'
import { handleUpdateTaskTitle } from '../handlers/handleUpdateTaskTitle.js'
import { handleCompleteTaskToggle } from '../handlers/handleCompleteTaskToggle.js'
import { handleDeleteAllChecked } from '../handlers/handleDeleteAllChecked.js'

//import renderers
import { renderNewList } from '../views/renderNewList.js'
import { renderAddTask } from '../views/renderAddTask.js'
import { renderDeleteItem } from '../views/renderDeleteItem.js'
import { renderTaskStrikethroughToggle } from '../handlers/renderTaskStrikethroughToggle.js'
import { renderDeleteAllChecked } from '../views/renderDeleteAllChecked.js'


const myLists = createToDoListCollection("My List")
const mainListsContentContainer = document.querySelector(".lists-container")
mainListsContentContainer.dataset.id = myLists.getID()

const toolBar = document.querySelector(".tool-bar")
toolBar.addEventListener("click", (e) => {
    let target = e.target
    let id = target.id

    if (id == "delete-all-checked") {
        // handle delete all checked
        handleDeleteAllChecked(myLists)

        //render delete all checked
        renderDeleteAllChecked(myLists, mainListsContentContainer)
    }
})

// side nav event listener
const sideNav = document.querySelector("#side-nav")
sideNav.addEventListener("click", (e) => {
    let id = e.target.id
    if (id == "new-list") {
        // create new list
        let newList = handleNewList()
        // add list to myLists
        myLists.addItem(newList)
        // render new list on DOM
        renderNewList(newList, mainListsContentContainer)
    }
})


// button event listeners 
mainListsContentContainer.addEventListener("click", (e) => {
    let id = e.target.id
    let listId = e.target.closest(".list-container").dataset.listId
    let taskId 
    if (id == "add-item-button") {
        // handle new item
        let newItem = handleAddItem(myLists, listId)
        // render new item
        renderAddTask(listId, newItem)
    }

    if (id == "delete-item-button") {
        taskId = e.target.closest(".task-container").dataset.taskId
        handleDeleteItem(myLists, listId, taskId)
        renderDeleteItem(taskId)
    }

    if (id == "checkbox-button") {
        taskId = e.target.closest(".task-container").dataset.taskId
        handleCompleteTaskToggle(myLists, listId, taskId)
        renderTaskStrikethroughToggle(taskId)
    }

    if (id == "date-button") {
        taskId = e.target.closest(".task-container").dataset.taskId
        handleAddDateButton(myLists, listId, taskId)
    }
})

mainListsContentContainer.addEventListener("keydown", (e) => {
    let key = e.key
    let target = e.target
    let listId = target.closest(".list-container").dataset.listId

    if ((key === "Enter" || key === "Tab") && target.classList.contains("list-title")) {
        // prevent default behaviour
        event.preventDefault()
        // get input value 
        let textInput = target.value
        // handle title
        handleUpdateListTitle(myLists, listId, textInput)
        // unselect input field
        document.activeElement.blur();
    }

    if ((key === "Enter" || key === "Tab") && target.classList.contains("list-description")) {
        // prevent default behaviour
        event.preventDefault()
        // get input value 
        let textInput = target.value
        // handle title
        handleUpdateListDescription(myLists, listId, textInput)
        // unselect input field
        document.activeElement.blur()
    }

    if ((key === "Enter" || key === "Tab") && target.classList.contains("task-title")) {
        let taskId = e.target.closest(".task-container").dataset.taskId
        event.preventDefault()
        let textInput = target.value
        handleUpdateTaskTitle(myLists, listId, taskId, textInput)
        document.activeElement.blur()
    }

    if ((key === "Delete") && target.classList.contains("task-title")) {
        event.preventDefault()
        let taskId = e.target.closest(".task-container").dataset.taskId
        let textInput = target.value
        handleDeleteItem(myLists, listId, taskId)
        renderDeleteItem(taskId)
        document.activeElement.blur()
    }
})









