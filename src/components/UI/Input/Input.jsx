import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import style from './Input.module.css';

const Input = ({description, id}) => {
    const [value, setValue] = useState("");
    const {isCalculating} = useSelector(state => state.isCalculating)
    const talents = useSelector(state => state.talents)
    const {setSomeTalentsValue} = useActions()

    useEffect(() => {
        if (isCalculating && id in talents) {
            if (typeof value === 'number') {
                setSomeTalentsValue(id, value)
            }
        } else {
            console.log(talents)
        }
    }, [isCalculating])

    return (
        <div className={style.InputContainer}>
            <input
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                onFocus={() => {value === 0 && setValue("")}}
                onBlur={() => {!value && setValue(0)}}
                type="number"
                placeholder={description}/>
            <label>{description}</label>
        </div>
    );
};

export default Input;