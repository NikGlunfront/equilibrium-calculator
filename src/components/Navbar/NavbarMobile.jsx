import React from 'react';
import style from './Navbar.module.css';

const NavbarMobile = () => {
    return (
        <div className={style.NavbarMobile}>
            <div className={style.BurgerButton}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default NavbarMobile;