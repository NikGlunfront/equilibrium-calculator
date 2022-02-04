import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <a href="/test" onClick={(e) => {e.preventDefault()}}>Оставить отзыв (Анонимно)</a>
                    <a href="/test" onClick={(e) => {e.preventDefault()}}>Выйти</a>
                </div>
            </Container>
        </header>
    );
};

export default Header;