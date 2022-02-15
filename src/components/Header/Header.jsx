import React from 'react';
import Container from '../Container/Container';
import style from './Header.module.css';
import axios from 'axios';
import { useActions } from '../../hooks/useActions';

const Header = () => {
    const {changeModalVisibility} = useActions()

    const getReviews = async () => {
        const response = await axios.get('http://94.137.242.252:7777/api/TextBlocks/GetTextBlocks', {
            params : {
                tabName: "talents"
            }
        })
        console.log(response.data)
        return response.data;
    }

    const openReviewModal = (e) => {
        e.preventDefault();
        changeModalVisibility(true)
    }


    const sendReview = (e) => {
        e.preventDefault()
        // getReviews()
    }
    return (
        <header className={style.Header}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <a href="/test" onClick={(e) => openReviewModal(e)}>Оставить отзыв (Анонимно)</a>
                    <a href="/test" onClick={(e) => sendReview(e)}>Выйти</a>
                </div>
            </Container>
        </header>
    );
};

export default Header;