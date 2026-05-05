import { compose } from "../behaviours/compose.js";
import { withTitle } from "../behaviours/withTitle.js";
import { withDescription } from "../behaviours/withDescription.js";
import { withDueDate } from "../behaviours/withDueDate.js";
import { withPriority } from "../behaviours/withPriority.js";
import { withCompletion } from "../behaviours/withCompletion.js";
import { withID } from "../behaviours/withID.js";


export const createToDoListItem = ({title = "add title", description = "add description", dueDate = "", priority = ""}) => {
    return compose(
        withID(),
        withTitle(title),
        withDescription(description),
        withDueDate(dueDate),
        withPriority(priority),
        withCompletion(),
    )({})
}





