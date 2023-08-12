import {React, useContext} from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContex';

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    return (
        <div className="content-todoSearch">
            <input
            placeholder="Filtrar"
            className="TodoSearch"
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
            }}
            />
        </div>
    );
}

export { TodoSearch };