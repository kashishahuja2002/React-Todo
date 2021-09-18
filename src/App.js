import React, {useState, useEffect} from "react";
import './App.css';

// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App()
{
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filtered, setFiltered] = useState([]);
    const [inputType, setInputType] = useState("Add");

    useEffect ( () => {filterHandler();}, [todos, status]);

    const filterHandler = () => {
        switch(status) {
            case 'completed':   setFiltered(todos.filter( el => el.completed === true));
                                break;
            case 'uncompleted': setFiltered(todos.filter( el => el.completed === false));
                                break;
            default:    setFiltered(todos);
                        break;
        }
    }

    return(
        <div className="App">
            <header>
                <h1>To-Do App</h1>
            </header>
            <Form 
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos} 
                inputText={inputText}
                setStatus={setStatus}
                inputType={inputType}
                setInputType={setInputType}
            />
            <TodoList 
                todos={todos} 
                setTodos={setTodos}
                filtered={filtered}
                inputType={inputType}
                setInputType={setInputType}
                setInputText={setInputText}
            /> 
        </div>
    );
}

export default App;