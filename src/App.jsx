import './scss/app.scss';
import HomePage from './routes/HomePage';
import {  createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
  const [isDarkMode, setIsDarkMod] = useState(false)
  const toggleTheme = () =>{
    setIsDarkMod(prev => !prev)
  }
  return<ThemeContext.Provider value = {{isDarkMode, toggleTheme}}>
    {children}
    </ThemeContext.Provider>
}

function App() {
 
  return <ThemeProvider><HomePage/></ThemeProvider>
}

export default App;