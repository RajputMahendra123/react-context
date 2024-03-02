// Create Context for todo
import { createContext, useState } from "react";

const TodoContext = createContext()

const ToDoProvider = ({ children }) => {
    const [todo, setTodo] = useState([])

    return (
        <TodoContext.Provider value={{ todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, ToDoProvider }