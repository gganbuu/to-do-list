export const withCompletion = () => (obj) => {
    let complete = false;

    return { 
        ...obj,
        getCompletion: () => complete,
        toggleCompletion: () => {complete == false ? 
                                complete = true : 
                                complete = false; 
        }
    };
};