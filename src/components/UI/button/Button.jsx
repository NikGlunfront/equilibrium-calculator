import React from 'react';
import style from './Button.module.css';

const Button = ({children, onClick, addClass}) => {
    return (
        <button onClick={onClick} className={addClass ? style.Button + ' ' + addClass : style.Button}>
            {children}
        </button>
    );
};

export default Button;