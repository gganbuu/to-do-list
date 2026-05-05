import { createToDoListItem } from "./to-do-list-item.js"
import { compose } from "../behaviours/compose.js";
import { withTitle } from "../behaviours/withTitle.js";
import { withDescription } from "../behaviours/withDescription.js";
import { withObjectCollection } from "../behaviours/withObjectCollection.js";
import { withID } from "../behaviours/withID.js";

export const createToDoList = (title, description) => {
    return compose(
        withID(),
        withTitle(title),
        withDescription(description),
        withObjectCollection()
    )({})
}