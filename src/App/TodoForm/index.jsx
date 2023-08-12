import React, { useContext, useState } from "react";
import {TodoContext} from '../../TodoContex/index'
import './TodoForm.css';

function TodoForm() {
    const {addTodo, setOpenModal} = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="field-container">
                <label>Crea un nuevo TODO</label>
                <textarea 
                    placeholder="Terminar de leer..." 
                    value={newTodoValue}
                    onChange={onChange}
                />
            </div>
            <div className="buttons-container">
                <button className="btn btn-cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="btn btn-add" >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};