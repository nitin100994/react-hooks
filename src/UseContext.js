import React, {useState} from 'react'
import FunctionContextComponent from './useContext/FunctionContextComponent' 
import ClassContextComponent from './useContext/ClassContextComponent' 

export const ThemeContext = React.createContext(); 

export default function UseContext() {

    const [darkTheme,setDarkTheme] = useState(true);
    function toggleTheme(){
        setDarkTheme(prevTheme => !prevTheme);
        console.log("darkTheme",darkTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ ThemeContext.Provider>
        </>
    )
}
