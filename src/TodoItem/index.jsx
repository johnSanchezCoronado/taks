import './TodoItem.css';
import { BsCheckLg, BsCheckCircle, BsTrash3 } from "react-icons/bs";

function TodoItem({text, completed, onComplete, onDelete}) {
    return (
        <li className="TodoItem">
        {completed ?
            <BsCheckCircle 
                // onClick={onComplete}
                className="Icon Icon-check--active"
            />
        :
            <BsCheckLg 
                onClick={onComplete}
                className="Icon Icon-check"
            />
        }
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
            {text}
        </p>
        <BsTrash3 
            className="Icon Icon-delete"
            onClick={onDelete}
        />
        </li>
    );
}

export { TodoItem };