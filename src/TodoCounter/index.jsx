import { useContext } from 'react';
import './TodoCounter.css';
import { PiConfettiBold } from "react-icons/pi";
import { TodoContext } from '../TodoContex';

function TodoCounter() {
    const {todoCompleted, totalTodos} = useContext(TodoContext);
    return (
        <h1 className="TodoCounter">
            {todoCompleted === totalTodos ?
            <>
                <PiConfettiBold /> Felicitaciones, has completado todas tus tareas <PiConfettiBold />
            </>
            :
                <>
                    Tienes <span>{todoCompleted}</span> tareas completadas de <span>{totalTodos}</span>
                </>
            }
        </h1>
    );
}

export { TodoCounter };