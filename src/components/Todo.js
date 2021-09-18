import React from "react";

const Todo = ({item, text, setTodos, todos, setInputText, inputType, setInputType}) => {

    const deleteHandler = () => {
        setTodos(todos.filter( (el) => el.id !== item.id))
    }

    const completeHandler = () => {
        setTodos(todos.map( ele => {
                if(ele.id === item.id)
                {
                    return{
                        ...ele, completed: !ele.completed 
                    }
                }
                return ele;
            }
        ))
    }

    const editHandler = () => {
        setInputText(item.text);
        setInputType("Edit");
        deleteHandler();
    }

    return(
        <div className="todo">
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>{text}</li>
            <button className="edit-btn" onClick={editHandler}>
                <i className="fas fa-pen"></i> 
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i> 
            </button>
        </div>
    );
}

export default Todo;