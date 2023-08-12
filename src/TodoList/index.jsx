import './TodoList.css';

function TodoList ({loading, children}) {
    return(
        <ul className={loading ? "TodoList loading" : "TodoList"}>
            {children}
        </ul>
    )
} 

export {TodoList}