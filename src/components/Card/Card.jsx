import React from 'react';
import Input from '../UI/Input/Input';
import style from './Card.module.css';

const Card = ({imgSrc, description, id}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.ImgContainer}>
                {imgSrc && <img src={imgSrc} alt={description} />}
            </div>
            <Input description={description} id={id} />
        </div>
    );
};

export default Card;