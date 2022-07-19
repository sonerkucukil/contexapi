import React, {createContext, useState} from 'react';

export const TodolistContext = createContext();

const TodolistContextProvider = ({children}) => {
    
    const [todos, setTodos] = useState([
        {text:'Plan the  family trip', id:1},
        {text:'Go shopping', id:2},
        {text:'Go sport', id:3}, 
    ]);
    
    return(
        <TodolistContext.Provider value={{todos} } > 
            {children}
        </TodolistContext.Provider>
    );
    
}
export default TodolistContextProvider;