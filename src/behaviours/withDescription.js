export const withDescription = (description) => (obj) => {
    let _description = description;

    return { 
        ...obj,
        getDescription: () => _description,
        setDescription: (newDescription) => _description = newDescription
    };
};