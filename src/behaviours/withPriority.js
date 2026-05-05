export const withPriority = (priority) => (obj) => {
    let _priority = priority;

    return { 
        ...obj,
        getPriority: () => _priority,
        setPriority: (newPriority) => _priority = newPriority
    };
};