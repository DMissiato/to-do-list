
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State, ToDoList as ListType, ToDoItem } from '../../types/types'
import { addToDo, deleteToDo } from '../../store/actions'
import ModalModify from '../ModalModify'
import ListItem from '../ListItem'
import styles from './ToDoList.module.scss'

const ToDoList = () =>
{
    const dispatch = useDispatch();
    // State & Hooks 
    const toDoList = useSelector((state: State) => state.toDoList);

    const [inputText, setInputText] = useState<string>('');
    const [inputAge, setInputAge] = useState<number>(0);

    const [printedList, setPrintedList] = useState<ListType>([]);
    const [rows, setRows] = useState<number>(10);

    // Refactoring: Move to the store
    const [currentToDoModify, setCurrentToDoModify] = useState<ToDoItem>({ id: 0, text: '', age: 0, done: false });
    const [showModify, setShowModify] = useState<boolean>(false);


    useEffect(() =>
    {
        setPrintedList(toDoList.slice(0, rows));
    }, [rows, toDoList]);

    // Events
    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputText(e.target.value);
    }

    const handleChangeInputAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputAge(e.target.value ? parseInt(e.target.value) : 0);
    }

    const handleChangeRows = (e: React.ChangeEvent<HTMLSelectElement>) =>
    {
        setRows(parseInt(e.target.value));
    }

    // Add
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>
    {
        e.preventDefault();
        if(inputText.trim())
        {
            dispatch(addToDo(inputText, inputAge));
            setInputText('');
        }
    }

    const handleShowModify = (id: number, text: string, age: number) =>
    {
        setCurrentToDoModify({ id, text, age, done: false });
        setShowModify(true);
    }

    const handleCloseModify = () =>
    {
        setShowModify(false);
    }

    const handleDelete = (id: number) =>
    {
        dispatch(deleteToDo(id));
    }


    return(
        <div className={styles.wrapper}>
            <ModalModify handleClose={handleCloseModify} item={currentToDoModify} show={showModify} />
            <h1>To Do List</h1>
            <form>
                <input value={inputText} onChange={handleChangeInputText} type="text" placeholder="New Todo.."/>
                <input value={inputAge} onChange={handleChangeInputAge} type="number" step="1" min="0" max="99" placeholder="Age"/>
                <input onClick={handleSubmit} type="submit" value="Add"/>
            </form>
            <ul className={styles.list}>
                {
                    printedList.map((value, index) => 
                    (
                        <ListItem key={index} handleShow={() => handleShowModify(value.id, value.text, value.age)} handleDeleteClick={handleDelete} id={value.id} 
                                text={value.text} age={value.age} done={value.done} />
                    ))
                }
            </ul>
            <label htmlFor="rows">Display rows:</label>
            <select id="rows" value={rows} onChange={handleChangeRows}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
            </select>
        </div>
    )
}

export default ToDoList