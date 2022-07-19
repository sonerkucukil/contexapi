import React , {useContext} from 'react';
import { ThemeContext } from '../Contex/ThemeContext';
import { AuthContext } from '../Contex/AuthContext';

/*class Navbar extends React.Component {
    render() {
        return (
         <AuthContext.Consumer>{(AuthContext) => (
            <ThemeContext.Consumer>{(ThemeContext) => {
                const {isDarkTheme, darkTheme, lightTheme} = ThemeContext;
                const {isLoggedIn,changeAuthStatus} = AuthContext;
                const theme= isDarkTheme ? darkTheme:lightTheme;
                return (
                    <nav style={{background:theme.background, color:theme.text, height:'120px'}}>
                        <h2 style={{textAlign: 'center'}}> 
                            Nil Akademi
                        </h2>
                        <p style={{textAlign: 'center'}} onClick={changeAuthStatus}
                        >
                            { isLoggedIn ? 'Logged IN' : 'Logged OUT'}
                        </p>
                        <div className='ui three buttons'>
                            <button className='ui button'>Overview</button>
                            <button className='ui button'> Contact</button>
                            <button className='ui button'>Support</button>
                        </div>
                    </nav>
                );
            }}
            </ThemeContext.Consumer>
         )}
        </AuthContext.Consumer>
        )
    }
}
*/
const Navbar = () => {
    const {isDarkTheme, darkTheme, lightTheme} = useContext(ThemeContext);
    const {isLoggedIn,changeAuthStatus} = useContext(AuthContext);
    const theme= isDarkTheme ? darkTheme:lightTheme;

    return(
        <nav style={{background:theme.background, color:theme.text, height:'120px'}}>
                        <h2 style={{textAlign: 'center'}}> 
                            Nil Akademi
                        </h2>
                        <p style={{textAlign: 'center'}} onClick={changeAuthStatus}
                        >
                            { isLoggedIn ? 'Logged IN' : 'Logged OUT'}
                        </p>
                        <div className='ui three buttons'>
                            <button className='ui button'>Overview</button>
                            <button className='ui button'> Contact</button>
                            <button className='ui button'>Support</button>
                        </div>
                    </nav>
    );
}



export default Navbar;