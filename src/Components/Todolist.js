import React, { useContext } from 'react';
import { ThemeContext } from '../Contex/ThemeContext';
import { TodolistContext } from '../Contex/TodolistContext';

/*class Todolist extends React.Component {
    static contextType =ThemeContext;
    render(){
        const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme= isDarkTheme ? darkTheme:lightTheme;        
        return(
            <div style={{background: theme.background, color:theme.text, height: '140px', textAlign:'center'}}>
                <p className='item'>Plan to trip</p>
                <p className='item'> Go shopping for  dinner</p>
                <p className='item'>Go for a walk</p>
                <button className='ui button primary' onClick={changeTheme}>change theme</button>
            </div>
        )
    }
}
UseContext Hook'u kullanmadığımız durumda
*/

const Todolist = () => {
   
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const {todos} = useContext(TodolistContext);

    const theme= isDarkTheme ? darkTheme:lightTheme;
    return(
        <div style={{background: theme.background, color:theme.text, height: '140px', textAlign:'center'}}>
            {todos.lenght ? (
                 todos.map( todo => {
                    return (<p  key={todo.id} className='item'>{todo.text}</p>)
                     })
                    ) : (<di>  
                        <input type="text" />
                    </di> )
             }
            <button className='ui button primary' onClick={changeTheme}>change theme</button>
        </div>
    )
};

export default Todolist;