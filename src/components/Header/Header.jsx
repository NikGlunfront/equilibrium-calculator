import React from 'react';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;