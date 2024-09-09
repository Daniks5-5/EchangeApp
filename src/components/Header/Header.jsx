import React from "react";
import './Header.css';

function Header(){
    return(
       <header>
        <nav>
            <ul>
                <li><a href="#"> курс </a></li>
                <li><a href="#"> главная </a></li>
                <li><a href="#"> о проекте </a></li>
                <li><a href="#"> вход </a></li>
            </ul>
        </nav>
       </header>
    );
}

export default Header;