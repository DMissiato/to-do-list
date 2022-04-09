
import { State, Action } from '../types/types'


const INIT_STATE: State = 
{
    lastId: 2,
    toDoList: [
        { id: 0, text: "Mario Rossi", done: false, age: 18 },
        { id: 1, text: "Andrea", done: false, age: 17 },
        { id: 2, text: "Davide", done: true, age: 44 }
    ]
}

const reducer = (state = INIT_STATE, action: Action) =>
{
    let index;

    switch(action.type)
    {
        case 'addToDo':
            return  {
                        lastId: state.lastId + 1, 
                        toDoList: [ 
                            ...state.toDoList, { id: state.lastId + 1, text: action.payload.text, age: action.payload.age, done: false }
                        ] 
                    };
        case 'modifyToDo':
            index = state.toDoList.findIndex(item => item.id === action.payload.id);
            state.toDoList.splice(index, 1, { id: action.payload.id, text: action.payload.text, age: action.payload.age, done: false });
            
            return {
                ...state,
                toDoList: [ ...state.toDoList ]
            }
        case 'deleteToDo':
            index = state.toDoList.findIndex(item => item.id === action.payload.id);
            state.toDoList.splice(index, 1);

            return {
                ...state,
                toDoList: [ ...state.toDoList ]
            }
        default:
            return state;
    }
}

export {
    reducer
}