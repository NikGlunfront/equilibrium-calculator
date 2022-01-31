import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                HEADER
            </Container>
        </header>
    );
};

export default Header;