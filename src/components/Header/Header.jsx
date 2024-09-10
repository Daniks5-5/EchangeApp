import React from "react";
import { useState } from "react";
import "@effective/css-reset/typography.css";
import './Header.css';

function Header() {
    const [nav, setNav] = useState(false);

    const handleMenuClick = () => {
        setNav(false); // Закрываем меню при клике на ссылку
    };

    return (
        <header>
            <nav>
                {/* Чекбокс для управления состоянием меню */}
                <input 
                  type="checkbox" 
                  id="menu-toggle" 
                  className="menu-toggle" 
                  checked={nav} 
                  onChange={() => setNav(!nav)} 
                />
                {/* Лейбл для открытия/закрытия меню */}
                <label htmlFor="menu-toggle" className="burger-menu">
                    <span className="burger-menu__line"></span>
                    <span className="burger-menu__line"></span>
                    <span className="burger-menu__line"></span>
                </label>

                {/* Меню, которое зависит от состояния nav */}
                <ul className={nav ? "menu active" : "menu"}>
                    <li><a href="#" onClick={handleMenuClick}>Курс</a></li>
                    <li><a href="#" onClick={handleMenuClick}>Главная</a></li>
                    <li><a href="#" onClick={handleMenuClick}>О проекте</a></li>
                    <li><a href="#" onClick={handleMenuClick}>Вход</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;