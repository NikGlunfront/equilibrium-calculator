import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import ContentBox from '../ContentBox/ContentBox';
import style from './InfoBlock.module.css'

const InfoBlock = ({data}) => {
    const {language} = useSelector(state => state.language)

    return (
        <ContentBox addStyles={{maxWidth: '350px', justifyContent: 'center'}} >
            <div className={style.Note}>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className={style.Text}>
                <p>{data[language].text}</p>
            </div>
        </ContentBox>
    );
};

export default InfoBlock;