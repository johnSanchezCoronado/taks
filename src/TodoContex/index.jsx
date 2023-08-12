import { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
    
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const todoCompleted = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos)
    }
    
    const completeTodo = (text) => {
        var newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        var newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    return (
        <TodoContext.Provider 
            value={{
                loading,
                error,
                todoCompleted,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };


// const todoObj = [
//   {id: 1, text: "Tomar curso de Fundamentos de la programación", completed: true},
//   {id: 2, text: "Tomar curso de HTML", completed: true},
//   {id: 3, text: "Tomar curso de CSS", completed: false},
//   {id: 4, text: "Tomar curso de React.js", completed: false},
//   {id: 5, text: "Tomar curso de Node.js", completed: false},
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');