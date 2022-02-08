import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { DATA_TABLE } from '../../../data/Table';
import style from './ResultsRow.module.css';

const ResultsRow = ({dataType}) => {
    const {language} = useSelector(state => state.language)
    const dataRowText = DATA_TABLE.text[language];

    return (
        <div className={style.Row}>
            {Object.keys(dataRowText).map(key => 
                <div key={key} className={style.Item}>
                    <span>{dataRowText[key]}:</span>
                    {dataType.isCalculating 
                        ?
                        <Spin size='large' tip="Wait..."/>
                        :
                        <span className={style.Number}>
                            {dataType[key].toLocaleString()}
                        </span>
                    }
                </div>  
            )}
        </div>
    );
};

export default ResultsRow;