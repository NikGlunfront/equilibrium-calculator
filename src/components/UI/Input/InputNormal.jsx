import React from 'react';
import { useSelector } from 'react-redux';
import { DATA_MAIN } from '../../../data/main';
import Button from '../button/Button';
import style from './Input.module.css'

const InputNormal = ({data, value, averageK, resultText, changePartnerAmountAction}) => {
    const {language} = useSelector(state => state.language)
    const partnersText = DATA_MAIN.ui[language]
    return (
        <div className={style.Result}>
                {!(data.id === 'partners') &&
                    <span>
                        {resultText}
                    </span>
                }
            <div>
                {(value > 0)
                    ? !(data.id === 'partners') ? "~" + Math.floor(parseInt(value) * averageK)  : <Button onClick={() => {changePartnerAmountAction(value)}}>{partnersText.partnersButton}</Button>
                    : !(data.id === 'partners') && "0"
                }
            </div>
        </div>
    );
};

export default InputNormal;