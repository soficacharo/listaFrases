import React from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = React.useState(JSON.parse(localStorage.getItem('theme')) || ['blanco']);

    React.useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>{props.children}</ThemeContext.Provider>
}

export default ThemeProvider;