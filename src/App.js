import React from 'react';
import Navbar from './Components/Navbar';
import Todolist from './Components/Todolist';
import ThemeContextProvider from './Contex/ThemeContext';
import AuthContextProvider from './Contex/AuthContext';
import TodolistContextProvider from './Contex/TodolistContext';

function App() {
  return (
    <div className="App ">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
          <AuthContextProvider>
            <TodolistContextProvider>
              <Navbar />
              <Todolist />
            </TodolistContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
       
      </div>
    </div>
  );
}

export default App;

