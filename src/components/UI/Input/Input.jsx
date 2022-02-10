import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import style from './Input.module.css';
import InputNormal from './InputNormal';
import InputPartnered from './InputPartnered';

const Input = ({data, resultText}) => {
    const [value, setValue] = useState("");
    const isCalculatingTalents = useSelector(state => state.talents.isCalculating)
    const isCalculatingCharm = useSelector(state => state.charm.isCalculating)
    const isCalculatingIntimacy = useSelector(state => state.intimacy.isCalculating)
    const talents = useSelector(state => state.talents)
    const charm = useSelector(state => state.charm)
    const intimacy = useSelector(state => state.intimacy)
    const {setSomeTalentsValue, setSomeCharmValue, setSomeIntimacyValue} = useActions()
    let averageK = 1;
    let partnersAmount = useSelector(state => state.partners.partners);

    if (data.id in talents) {
        averageK = (talents[data.id]["maxConst"] + talents[data.id]["minConst"]) / 2;
    }

    if (data.id in charm) {

        if (charm[data.id]['maxConst']) {
            averageK = (charm[data.id]["maxConst"] + charm[data.id]["minConst"]) / 2;
        }  

        if (charm[data.id] === "partners" && partnersAmount) {
            setValue(partnersAmount);
        }
    }

    if (data.id in intimacy) {

        if (intimacy[data.id]['maxConst']) {
            averageK = (intimacy[data.id]["maxConst"] + intimacy[data.id]["minConst"]) / 2;
        }
        
        if (intimacy[data.id] === "partners" && partnersAmount) {
            setValue(partnersAmount);
        }
    }

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

        if (data.id in talents) {
            if (isCalculatingTalents) {
                if (value > 0) {
                    setSomeTalentsValue(data.id, Math.floor(parseInt(value)))
                } else {
                    setSomeTalentsValue(data.id, 0)
                }
            } 
        }

        if (data.id in charm) {
            if (isCalculatingCharm) {
                if (value > 0) {
                    if (charm[data.id].isPartnered) {
                        setSomeCharmValue(data.id, Math.floor(parseInt(value) * partnersAmount))
                    } else {
                        setSomeCharmValue(data.id, Math.floor(parseInt(value)))
                    }
                } else {
                    setSomeCharmValue(data.id, 0)
                }
            }
        } 

        if (data.id in intimacy) {
            if (isCalculatingIntimacy) {
                if (value > 0) {
                    if (intimacy[data.id].isPartnered) {
                        setSomeIntimacyValue(data.id, Math.floor(parseInt(value) * partnersAmount))
                    } else {
                        setSomeIntimacyValue(data.id, Math.floor(parseInt(value)))
                    }
                } else {
                    setSomeIntimacyValue(data.id, 0)
                }
            }
        } 
    }, [isCalculatingTalents, isCalculatingCharm, isCalculatingIntimacy])

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
                    inputMode='numeric'
                    placeholder={data.text}/>
                <label>{data.text}</label>
            </div>
            {((data.id in charm) && (charm[data.id].isPartnered))
                ?
                <InputPartnered 
                    data={data}
                    value={value}
                    averageK={averageK * partnersAmount}
                    resultText={resultText}
                />
                :
                (data.id in intimacy) && (intimacy[data.id].isPartnered)
                    ?
                        <InputPartnered 
                            data={data}
                            value={value}
                            averageK={averageK * partnersAmount}
                            resultText={resultText}
                        />
                    : 
                        <InputNormal 
                            data={data}
                            value={value}
                            averageK={averageK}
                            resultText={resultText}
                        />
            }
        </div>
    );
};

export default Input;