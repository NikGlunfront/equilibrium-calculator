import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './ModalWindow.module.css';
import React from 'react';
import Button from '../UI/button/Button';
import { useActions } from '../../hooks/useActions';

const ModalSucces = ({succes}) => {
    const {changeModalVisibility} = useActions()
    if (!succes) {
        return null;
    }
    return (
        <div className={style.ModalSucces}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Ваш отзыв был успешно отправлен!</span>
            <span>Спасибо за Вашу обратную связь!</span>
            <Button onClick={() => changeModalVisibility(false)}>Ок</Button>
        </div>
    );
};

export default ModalSucces;