import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spin } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DATA_TABLE } from '../../../data/Table';
import Button from '../../UI/button/Button';
import style from './ResultsList.module.css';


const ResultsList = ({dataInputs, dataType}) => {
    const {language} = useSelector(state => state.language)
    const dataRowText = DATA_TABLE.text[language];
    const [isTableVisible, setIsTableVisible] = useState(false)
    const [isTableLoading, setIsTableLoading] = useState(false)
    const buttonText = DATA_TABLE.body[language].button

    const makeVisible = () => {
        setIsTableLoading(true)
        setTimeout(() => {
            setIsTableVisible(true)
        }, 1000);
    }

    return (
        <div className={style.Wrapper}>
            {!isTableVisible 
                ?
                
                isTableLoading 
                    ? <Spin size='large' tip="Wait..."/>
                    : 
                    <Button onClick={() => makeVisible()} addClass={style.Button}>
                        {buttonText}
                        <FontAwesomeIcon icon={faSortDown} />
                    </Button>
                
                :
                dataInputs.map(item =>
                    <div key={item.id} className={style.Item}>
                        <img src={item.img} alt={item.text} />
                        <div className={style.Info}>
                            <div className={style.InfoItem}>
                                {dataRowText.min}:
                                <span>{(dataType[item.id].minResult).toLocaleString()}</span>
                            </div>
                            <div className={style.InfoItem}>
                                {dataRowText.avg}:
                                <span>~ {(dataType[item.id].avgResult).toLocaleString()}</span>
                            </div>
                            <div className={style.InfoItem}>
                                {dataRowText.max}:
                                <span>{(dataType[item.id].maxResult).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ResultsList;