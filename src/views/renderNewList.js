export const renderNewList = (title, description, id, mainListsContentContainer) => {
    // list container
    const listContainer = document.createElement("div")
    listContainer.classList.add("d-flex", "flex-column", "mt-4", "p-4", "list-container")
    listContainer.dataset.listId = id

    // title input + styling
    const listTitle = document.createElement("input")
    listTitle.classList.add("form-control", "border-0", "py-1", "fs-3", "mt-3", "list-title")
    listTitle.type = "text"
    listTitle.placeholder = title
    listContainer.appendChild(listTitle)

    // description input + styling
    const listDescription = document.createElement("input")
    listDescription.classList.add("form-control", "border-0", "py-1", "text-secondary", "fs-5", "mt-3", "list-description")
    listDescription.type = "text"
    listDescription.placeholder = description
    listContainer.appendChild(listDescription)

    const addListItemButton = document.createElement("div")
    addListItemButton.classList.add("d-flex", "align-items-center", "mt-4", "ms-4", "w-50", "gap-3")
    const plusSymbol = document.createElement("i")
    plusSymbol.classList.add("bi", "bi-plus-square", "fs-5")
    plusSymbol.id = "add-item-button"
    plusSymbol.ariaHidden = "true"
    addListItemButton.appendChild(plusSymbol)
    listContainer.appendChild(addListItemButton)

    mainListsContentContainer.appendChild(listContainer)
} 

// this function creates the core view of new list, taking in a lists title, description, id and mainlistcontentcontainer as parameters