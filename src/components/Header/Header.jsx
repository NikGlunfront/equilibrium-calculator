import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css';
import axios from 'axios';

const Header = () => {
    const getReviews = async () => {
        const response = await axios.get('http://94.137.242.252:7777/api/Reviews/GetAllReviews')
        console.log(response.data)
        return response.data;
    }


    const sendReview = (e) => {
        e.preventDefault()
        getReviews()
    }
    return (
        <header className={style.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <a href="/test" onClick={(e) => sendReview(e)}>Оставить отзыв (Анонимно)</a>
                    <a href="/test" onClick={(e) => {e.preventDefault()}}>Выйти</a>
                </div>
            </Container>
        </header>
    );
};

export default Header;