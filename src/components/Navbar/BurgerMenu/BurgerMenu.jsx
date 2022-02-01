import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import style from './BurgerMenu.module.css';

const BurgerMenu = () => {
    return (
        <div className={style.BurgerMenu}>
            <div className={style.BurgerMenuHeader}></div>
        </div>
    );
};

export default BurgerMenu;