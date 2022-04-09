
import React, { useState } from 'react'
import ListItem from '../ListItem'
import styles from './ToDoList.module.scss'

const ToDoList = () =>
{
    const [inputText, setInputText] = useState<string>('');


    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>
    {
        e.preventDefault();
        // Add todo
        setInputText('');
    }


    return(
        <div className={styles.wrapper}>
            <form>
                <input value={inputText} onChange={handleChangeInputText} type="text" placeholder="New Todo.."/>
                <input onClick={handleSubmit} type="submit" value="Add"/>
            </form>
            <ul className={styles.list}>
                <ListItem text="1) First Todo" />
            </ul>
        </div>
    )
}

export default ToDoList