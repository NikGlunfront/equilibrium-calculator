import { faXRay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import Button from '../UI/button/Button';
import ModalSucces from './ModalSucces';
import style from './ModalWindow.module.css';

const ModalWindow = ({content}) => {
    const [valueText, setValueText] = useState('');
    const [succes, setSucces] = useState(true);
    const isModalVisible = useSelector(state => state.modals.isModalVisible)
    const {changeModalVisibility} = useActions()
    
    const onChange = (e) => {
        setValueText(e.target.value)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        let addLangUrl = 'http://94.137.242.252:7777/api/TextBlocks/AddLanguage'
        let addPageTabUrl = 'http://94.137.242.252:7777/api/TextBlocks/AddTab'
        let addTextOnPageUrl = 'http://94.137.242.252:7777/api/TextBlocks/AddTextBlockToTab'
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: addTextOnPageUrl,
            data: {
                texts: [
                    {language: 'rus', text: 'какой-то текст'},
                    {language: 'eng', text: 'some text'},
                    {language: 'tur', text: 'turk-text here'},
                ],
                tab: 'talents'
            }
        });
    }
    
    if (!isModalVisible) {
        return null
    }

    return (
        <div className={style.Modal}>
            <Button addClass={style.CloseButton} onClick={() => changeModalVisibility(false)} >
                <FontAwesomeIcon style={{color: '#fff'}} icon={faXRay} />
            </Button>
            {/* {content} */}
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <span>Введите ваш отзыв в окне, расположенном ниже:</span>
                <textarea 
                    value={valueText}
                    onChange={(e) => onChange(e)}
                    name='review' 
                    placeholder='Введите отзыв...'
                ></textarea>
                <Button >Отправить отзыв</Button>
            </form>
            <ModalSucces succes={succes}/>
        </div>
    );
};

export default ModalWindow;