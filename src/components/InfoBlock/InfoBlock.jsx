import React from 'react';
import { useSelector } from 'react-redux';
import style from './InfoBlock.module.css'

const InfoBlock = ({data}) => {
    const {language} = useSelector(state => state.language)

    return (
        <section className={style.Wrapper}>
            {data.map((item, index) => 
                <div key={index} className={style.ItemWrapper}>
                    <div className={style.Number}>
                        <span>{index}</span>
                    </div>
                    <div className={style.Text}>
                        <p>{item[language].text}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InfoBlock;