import './App.css';
import { TodoProvider } from '../TodoContex';
import { AppReturn } from './AppReturn';

function App() {
  return (
    <TodoProvider>
      <AppReturn 
        // loading={loading}
        // error={error}
        // todoCompleted={todoCompleted}
        // totalTodos={totalTodos}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
        // searchedTodos={searchedTodos}
        // completeTodo={completeTodo}
        // deleteTodo={deleteTodo}
      />
    </TodoProvider>
  )
}

export default App;
