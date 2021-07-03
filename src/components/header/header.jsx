import React from 'react';
import H from './header.module.css';
import {NavLink} from "react-router-dom";
import icons from "../../photo/icon3.png";

const Header = (props) => {
    return (
        <div>
            <h1 className={H.title}>To Do List</h1>
            <div className={H.containerMain}>
                <div>
                    <NavLink to={"/finishedTask"}>
                        <img src={icons} alt="icons"/>
                    </NavLink>
                </div>
                <div className={H.thems}>
                    <h3 onClick={props.themeToggler} className={H.changeTheme}>{props.themes}</h3>
                </div>
            </div>
        </div>
    )
}
export default Header;