import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATA_TABLE } from '../../../data/Table';
import style from './ResultsRow.module.css';

const ResultsRow = () => {
    const {language} = useSelector(state => state.language)
    const talents = useSelector(state => state.talents)
    const dataRowText = DATA_TABLE.text[language];

    
    return (
        <div className={style.Row}>
            {Object.keys(dataRowText).map(key => 
                <div key={key} className={style.Item}>
                    <span>{dataRowText[key]}:</span>
                    {talents.isCalculating 
                        ?
                        <Spin size='large' tip="Wait..."/>
                        :
                        <span className={style.Number}>
                            {talents[key]}
                        </span>
                    }
                </div>  
            )}
        </div>
    );
};

export default ResultsRow;