import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import style from './Input.module.css';

const Input = ({data, resultText}) => {
    const [value, setValue] = useState("");
    const averageK = (data.min + data.max) / 2;
    const isCalculatingTalents = useSelector(state => state.talents.isCalculating)
    const talents = useSelector(state => state.talents)
    const {setSomeTalentsValue} = useActions()

    const onChangeInput = (e) => {
        if (typeof value === 'number' && value !== "") {
            setValue(e.target.value)
        } else {
            setValue(e.target.value)
        }
    }

    const onFocusInput = () => {
        if (value < 1) {
            setValue("")
        }
    }

    const onBlurInput = () => {
        if (!value) {
            setValue(0)
        }
    }

    useEffect(() => {
        if (isCalculatingTalents && data.id in talents) {
            if (value > 0) {
                setSomeTalentsValue(data.id, Math.floor(parseInt(value) * averageK))
            } else {
                setSomeTalentsValue(data.id, 0)
            }
        } else {
            console.log(talents)
        }
    }, [isCalculatingTalents])

    return (
        <div className={style.InputField}>
            <div className={style.InputContainer}>
                <input
                    className={value > 0 ? style.PositiveInput : ""}
                    value={value}
                    onChange={(e) => onChangeInput(e)}
                    onFocus={() => onFocusInput()}
                    onBlur={() => onBlurInput()}
                    type="number"
                    placeholder={data.text}/>
                <label>{data.text}</label>
            </div>
            <div className={style.Result}>
                <span>{resultText}:</span> 
                <div>~{value > 0 ? Math.floor(parseInt(value) * averageK) : 0}</div>
            </div>
        </div>
    );
};

export default Input;