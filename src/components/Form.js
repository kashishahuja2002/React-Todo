import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus, inputType, setInputType}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setTodos([...todos, {title: inputText, completed: false, id: Math.random()*1000}])
        setInputText("");
        setInputType("Add");
    }

    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value); 
    }

    return (
        <form>
            <input type="text" className="todo-input" placeholder="Add a todo..." onChange={inputTextHandler} value={inputText}/>
            <button className="todo-button" type="submit" onClick={submitHandler}>
                {inputType}
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;