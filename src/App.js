import './App.css';
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import {lightTheme, darkTheme} from './components/DarkMode/Theme.jsx';
import { useState} from "react";
import {ThemeProvider} from "styled-components";
import Header from "./components/header/header";
import MainContainer from "./components/mainWindow/mainContainer";
import {Route} from 'react-router-dom';
import FinishedTask from "./components/finishedTask/finishedTask";

function App () {
    const [theme, setTheme] = useState([]);
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');

    }
    const themes = theme === 'light' ? 'Темная тема' : 'Светлая тема'

  return (
    <div className="App">
        <div>
            <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <Header themeToggler={themeToggler} themes = { themes }/>
            </ThemeProvider>
        </div>

        <MainContainer/>
        <Route path={'/finishedTask'} render = {() => <FinishedTask/>}/>
    </div>
  );
}

export default App;
