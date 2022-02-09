import React from 'react';
import style from './Card.module.css';

const CardImage = ({imgSrc, description}) => {
    return (
        <div className={style.ImgContainer}>
            {imgSrc && <img src={imgSrc} alt={description} />}
        </div>
    );
};

export default CardImage;