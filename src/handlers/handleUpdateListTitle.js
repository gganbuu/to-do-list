

export const handleUpdateListTitle = (myLists, listId, textInput) => {
    // find list object in lists collection
    let list = myLists.findID(listId)

    // find set title
    list.setTitle(textInput)
}