import React from 'react';
import style from './Input.module.css';

const Input = ({description}) => {
    return (
        <div className={style.InputContainer}>
            <input type="text" placeholder={description}/>
            <label>{description}</label>
        </div>
    );
};

export default Input;