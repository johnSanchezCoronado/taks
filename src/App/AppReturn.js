import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContex';
import { Modal } from '../Modal';
import { useContext } from 'react';
import { TodoForm } from './TodoForm';

function AppReturn() {
    const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList loading={loading}>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.lenght === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export {AppReturn};