
interface ToDoItem 
{
    id: number,
    text: string,
    done: boolean,
    age: number
}

type ToDoList = Array<ToDoItem>;

interface State 
{
    lastId: number,
    toDoList: ToDoList
}

interface Action 
{
    type: string,
    payload: {
        id: number,
        text: string,
        age: number
    }
}


export {
    type ToDoItem,
    type ToDoList,
    type State,
    type Action
}