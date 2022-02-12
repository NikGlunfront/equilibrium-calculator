import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Button from '../UI/button/Button';
import style from './ModalWindow.module.css';

const ModalWindow = () => {
    const [valueText, setValueText] = useState('');
    
    const onChange = (e) => {
        setValueText(e.target.value)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: 'http://94.137.242.252:7777/api/Reviews/AddReview',
            data: {
              review: valueText,
            }
        });
        // let url = "http://94.137.242.252:7777/api/Reviews/AddReview"
        // let data = {review: 'firstReview'}
        // let headers = {
        //     "Content-Type": "application/json"
        // }
        // await axios.post(url, data, headers)
    }
    
    const sendReview = (e) => {
        e.preventDefault()
    }

    return (
        <div className={style.Modal}>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <p>Введите ваш отзыв в окне, расположенном ниже:</p>
                <textarea 
                    value={valueText}
                    onChange={(e) => onChange(e)}
                    name='review' 
                    placeholder='Введите отзыв...'
                ></textarea>
                <Button >Отправить отзыв</Button>
            </form>
        </div>
    );
};

export default ModalWindow;