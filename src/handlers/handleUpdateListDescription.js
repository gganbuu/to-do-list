export const handleUpdateListDescription = (myLists, listId, textInput) => {
    // find list object in lists collection
    let list = myLists.findID(listId)

    // find set title
    list.setDescription(textInput)
}