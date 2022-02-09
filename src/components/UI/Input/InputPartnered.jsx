import React from 'react';
import style from './Input.module.css'

const InputPartnered = ({data, value, averageK, resultText}) => {
    return (
        <div className={style.Result}>
                <span>
                    {resultText}
                </span>
            <div>
                {(value > 0) && (averageK) 
                    ? "~" + Math.floor(parseInt(value) * averageK)
                    : "0"
                }
            </div>
        </div>
    );
};

export default InputPartnered;