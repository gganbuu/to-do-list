export const handleDeleteAllChecked = (myLists) => {
    // This function will delete all the checked items on the current page from 
    // the objects that are on the page
    
    //get lists on page, change nodelist into array list
    const listsNode = document.querySelectorAll(".list-container")
    const listsArray = [...listsNode] 
    
    //get list ids
    const listIdsArray = listsArray.map(list => list.dataset.listId)
   
    listIdsArray.forEach(list => {
        myLists.findID(list).clearCompleted()
    })

    // console.log(myLists.findID(listIdsArray[0]).getLength())
    // console.log(myLists.findID(listIdsArray[1]).getLength())
}