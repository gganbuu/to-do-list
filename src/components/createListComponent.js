export const createListComponent = (listObject) => {
    const listContainer = document.createElement("div")
    listContainer.classList.add("d-flex", "flex-column", "mt-4", "p-4", "list-container")
    listContainer.dataset.listId = listObject.getID()

    // title input + styling
    const listTitle = document.createElement("input")
    listTitle.classList.add("form-control", "border-0", "py-1", "fs-3", "mt-3", "list-title")
    listTitle.type = "text"
    listTitle.placeholder = listObject.getTitle()
    listContainer.appendChild(listTitle)

    // description input + styling
    const listDescription = document.createElement("input")
    listDescription.classList.add("form-control", "border-0", "py-1", "text-secondary", "fs-5", "mt-3", "list-description")
    listDescription.type = "text"
    listDescription.placeholder = listObject.getDescription()
    listContainer.appendChild(listDescription)

    const addListItemButton = document.createElement("div")
    addListItemButton.classList.add("d-flex", "align-items-center", "mt-4", "ms-4", "w-50", "gap-3")
    const plusSymbol = document.createElement("i")
    plusSymbol.classList.add("bi", "bi-plus-square", "fs-5")
    plusSymbol.id = "add-item-button"
    plusSymbol.ariaHidden = "true"
    addListItemButton.appendChild(plusSymbol)
    listContainer.appendChild(addListItemButton)
    
    return listContainer
}

// This list component will take in the list object 
// as a parameter and return an element that can be appended
// in the mainlistcontainer.
// it includes:
//  - listContainer
//  - listTitle
//  - listDescription
//  - addListItemButton
