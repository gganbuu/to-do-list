export const withObjectCollection = () => (obj) => {
    let _list = []

    return { 
        ...obj,
        getList: () => [..._list],
        getIndexAt: (index) => _list[index],
        getIndexOf: (item) => [..._list].indexOf(item),
        addItem: (item) => _list.push(item),
        deleteIndex: (index) => _list.splice(index, 1),
        getLength: () => _list.length,
        findID: (id) => [..._list].find((element) => element.getID() == id)
    };
};