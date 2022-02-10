import React from 'react';
import { useSelector } from 'react-redux';
import { DATA_MAIN } from '../../../data/main';
import Button from '../button/Button';
import { useLocation } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import style from './Input.module.css';
import reactScrollToComponent from 'react-scroll-to-component';

const InputNormal = ({data, value, averageK, resultText}) => {
    const {language} = useSelector(state => state.language)
    const {changePartnerAmountAction} = useActions()
    const partnersText = DATA_MAIN.ui[language]
    const location = useLocation();

    const changePartner = () => {

        changePartnerAmountAction(value)

        if (location.pathname === "/proximity") {
            setTimeout(() => {
                reactScrollToComponent(document.getElementById("proximity-inputs"),{
                    offset: -50,
                    align: 'top',
                    duration: 1000
                })
            }, 100);
        }

        if (location.pathname === "/charm") {
            setTimeout(() => {
                reactScrollToComponent(document.getElementById("charm-inputs"),{
                    offset: -50,
                    align: 'top',
                    duration: 1000
                })
            }, 100);
        }
    }
    return (
        <div className={style.Result}>
                {!(data.id === 'partners') &&
                    <span>
                        {resultText}
                    </span>
                }
            <div>
                {(value > 0)
                    ? !(data.id === 'partners') ? "~" + Math.floor(parseInt(value) * averageK)  : <Button onClick={() => changePartner(value)}>{partnersText.partnersButton}</Button>
                    : !(data.id === 'partners') && "0"
                }
            </div>
        </div>
    );
};

export default InputNormal;