import React from 'react';
import style from './Button.module.css';

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={style.Button}>
            {children}
        </button>
    );
};

export default Button;