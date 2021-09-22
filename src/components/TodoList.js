import React from "react";

// import components
import Todo from "./Todo";

const TodoList = ({filtered, setTodos, todos, setInputText, inputType, setInputType}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map( (item) => 
                    (<Todo 
                        key={item.id} 
                        item={item}
                        title={item.title}
                        setTodos={setTodos}
                        todos={todos}
                        setInputText={setInputText}
                        inputType={inputType}
                        setInputType={setInputType}
                    />)
                )}
            </ul>
        </div>
    );
}

export default TodoList;