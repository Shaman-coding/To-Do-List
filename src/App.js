import './App.css';
import { GlobalStyles } from "./components/DarkMode/GlobalStyles";
import {lightTheme, darkTheme} from './components/DarkMode/Theme.jsx';
import React, { useState} from "react";
import {ThemeProvider} from "styled-components";
import MainContainer from "./components/mainWindow/mainContainer";
import {Route} from 'react-router-dom';
import moon from './photo/moon.png';
import sun from './photo/sun.png';
import FinishedTuskContainer from "./components/finishedTask/finishedTaskContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import toDoList from "./photo/lightIcon.png";
import DarkIcons from "./photo/to-do.png";


function App () {
    const [theme, setTheme] = useState([]);
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');

    }
    const themes = theme === 'light' ? <img className={'iconsThem'} src={moon} alt="moon"/> : <img className={'iconsThem'} src={sun} alt="sun"/>
    const themIcons = theme === 'light' ? <img src={toDoList} alt="toDoListIcons"/> : <img src={DarkIcons} alt="toDoListIcons"/>
  return (
    <div className="App">
        <div>
            <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <HeaderContainer themeToggler={themeToggler} themes = { themes } themIcons={themIcons}/>
            </ThemeProvider>
        </div>

        <div className={'content'}>
            <Route exact path = {"/"} render = { () =>  <MainContainer/>}/>
            <Route path={'/finishedTask'} render = { () => <FinishedTuskContainer/>}/>
        </div>
    </div>
  );
}

export default App;
