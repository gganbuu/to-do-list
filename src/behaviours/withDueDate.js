//due date function
// takes in date (yyyy-mm-dd)
// returns ...obj (obj with functions)
// getdate
// setdate
// dateformat?
// addtime?

export const withDueDate = (dueDate) => (obj) => {
    let _dueDate = dueDate;

    return { 
        ...obj,
        getDueDate: () => _dueDate,
        setDueDate: (newDueDate) => _dueDate = newDueDate
    };
};