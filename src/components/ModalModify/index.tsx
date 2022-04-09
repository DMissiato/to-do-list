
import { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modifyToDo } from '../../store/actions'
import { ToDoItem } from '../../types/types'
import styles from './ModalModify.module.scss'

interface Props 
{
    handleClose(): void,
    item: ToDoItem,
    show?: boolean
}

const ModalModify: FunctionComponent<Props> = ({ handleClose, item, show = false }) =>
{
    const dispatch = useDispatch();

    const [inputText, setInputText] = useState<string>('');
    const [inputAge, setInputAge] = useState<number>(0);

    useEffect(() =>
    {
        setInputText(item.text);
        setInputAge(item.age);
    }, [item]);


    // Events
    const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputText(e.target.value);
    }

    const handleChangeInputAge = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputAge(e.target.value ? parseInt(e.target.value) : 0);
    }

    // Modify
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>
    {
        e.preventDefault();
        if(inputText.trim())
        {
            dispatch(modifyToDo(item.id, inputText, inputAge));
            setInputText('');
            setInputAge(0);
            handleClose();
        }
    }

    return (
        show ?
            <div className={styles.wrapper} onClick={handleClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <h2>Modifica - {item.id}</h2>
                    <form>
                        <input value={inputText} onChange={handleChangeInputText} type="text" placeholder="New Todo.."/>
                        <input value={inputAge} onChange={handleChangeInputAge} type="number" step="1" min="0" max="99" placeholder="Age"/>
                        <input onClick={handleSubmit} type="submit" value="Apply"/>
                    </form>
                </div>
            </div>
        :
            <>
            </>
    )
}

export default ModalModify