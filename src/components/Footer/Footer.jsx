import React from 'react';
import Container from '../Container/Container';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container>
                <div className={style.footer__content}>
                    <p style={{fontSize: '13px', fontWeight: '700'}}>Equilibrium Calculator</p>
                    <p style={{fontSize: '10px'}}>Calculator v2</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;