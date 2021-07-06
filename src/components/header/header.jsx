import React from 'react';
import H from './header.module.css';
import {NavLink} from "react-router-dom";
import icons from "../../photo/icon3.png";

const Header = ({finishedTasks, themeToggler, themes, themIcons}) => {




    return (
        <div className={H.headerContent}>
            <div className={H.blockIconThems}>
                <div><h1 className={H.title}>To Do List</h1></div>
                <div><NavLink to={"/"}>{themIcons}</NavLink></div>

            </div>

            <div className={H.containerMain}>
                <div className={H.blockTusk}>
                    <NavLink to={"/finishedTask"}>
                        <img src={icons} alt="icons" />
                    </NavLink>
                    <p className={H.countTusk}> Архив: { finishedTasks.length } </p>
                </div>
                <div className={H.thems}>
                    <h3 onClick={themeToggler} className={H.changeTheme}>{themes}</h3>
                </div>
            </div>
        </div>
    )
}
export default Header;