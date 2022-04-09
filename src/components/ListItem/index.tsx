
import { FunctionComponent, useState } from 'react'
import styles from './ListItem.module.scss'

interface Props
{
    handleShow(): void,
    handleDeleteClick(id: number): void,
    id: number,
    text: string,
    age: number,
    done?: boolean
}

const ListItem: FunctionComponent<Props> = ({ handleShow, handleDeleteClick, id, text, age, done = false }) => 
{
    const [isDone, setIsDone] = useState<boolean>(done);


    const handleDoneClick = () =>
    {
        setIsDone(state => !state);
    }

    return (
        <>
            <hr/>
            <li className={styles.wrapper}>
                <p className={isDone ? ` ${styles.done}` : ''}>{text}</p>
                <p>{age} - {age >= 18 ? 'Adult' : 'Child'}</p>
                <button onClick={handleDoneClick}>{isDone ? 'Undo' : 'Done'}</button>
                <i onClick={handleShow} className="fa fa-pencil-square-o"></i>
                <i onClick={() => handleDeleteClick(id)} className="fa fa-trash-o"></i>
            </li>
        </>

    )
}

export default ListItem