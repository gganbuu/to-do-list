export const withID = () => (obj) => {
    let _id = crypto.randomUUID();

    return { 
        ...obj,
        getID: () => _id,
    };
};