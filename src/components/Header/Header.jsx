import React from 'react';
import Container from '../Container/Container';
import BurgerMenu from '../Navbar/BurgerMenu/BurgerMenu';
import Navbar from '../Navbar/Navbar';
import NavbarMobile from '../Navbar/NavbarMobile';
import style from './Header.module.css'

const Header = () => {
    
    return (
        <header className={style.header}>
            <Container>
                <Navbar />
                <NavbarMobile />
                <BurgerMenu />
            </Container>
        </header>
    );
};

export default Header;