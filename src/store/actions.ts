

const addToDo = (text: string, age: number) =>
({
    type: 'addToDo',
    payload: {
        text,
        age
    }
})

const modifyToDo = (id: number, text: string, age: number) =>
({
    type: 'modifyToDo',
    payload: {
        id,
        text,
        age
    }
})

const deleteToDo = (id: number) =>
({
    type: 'deleteToDo',
    payload: {
        id
    }
})


export {
    addToDo,
    modifyToDo,
    deleteToDo
}