import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ModalWindow.module.css';
import React from 'react';
import Button from '../UI/button/Button';

const ModalSucces = ({succes, reference, closeModal}) => {

    if (!succes) {
        return null;
    }
    return (
        <div ref={reference} className={style.ModalSucces}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Ваш отзыв был успешно отправлен!</span>
            <span>Спасибо за Вашу обратную связь!</span>
            <Button onClick={() => closeModal()}>Хорошо</Button>
        </div>
    );
};

export default ModalSucces;