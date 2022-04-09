
import styles from './ListItem.module.scss'

const ListItem = ({ text }: { text: string}) => 
{

    return (
        <>
            <hr/>
            <li className={styles.wrapper}>
                <p>{text}</p>
                <button>Done</button>
                <i className="fa fa-pencil-square-o"></i>
                <i className="fa fa-trash-o"></i>
            </li>
        </>

    )
}

export default ListItem