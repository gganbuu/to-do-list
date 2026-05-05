import { compose } from "../behaviours/compose.js"
import { withTitle } from "../behaviours/withTitle.js"
import { withObjectCollection } from "../behaviours/withObjectCollection.js"
import { withID } from "../behaviours/withID.js"


export const createToDoListCollection = (title) => {
    return compose(
        withID(),
        withTitle(title),
        withObjectCollection()
    )({})
}