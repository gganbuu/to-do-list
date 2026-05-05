export const withTitle = (title) => (obj) => {
    let _title = title;

    return { 
        ...obj,
        getTitle: () => _title,
        setTitle: (newTitle) => { _title = newTitle }
    };
};