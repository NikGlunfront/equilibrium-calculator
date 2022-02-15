import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spin } from 'antd';
import React from 'react';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import PostTextService from '../../API/PostService';
import { useActions } from '../../hooks/useActions';
import Button from '../UI/button/Button';
import ModalSucces from './ModalSucces';
import style from './ModalWindow.module.css';

const ModalWindow = ({content}) => {
    const [valueText, setValueText] = useState('');
    const [succes, setSucces] = useState(false);
    const [pendingForm, setPendingForm] = useState(false);
    const isModalVisible = useSelector(state => state.modals.isModalVisible)
    const {changeModalVisibility} = useActions()

    const modalRef = useRef()
    const modalSuccesRef = useRef()

    const closeModal = () => {
        changeModalVisibility(false)
        setSucces(false)
        setValueText('')
    }

    const bckgCloseModal = (e) => {
        if (modalRef.current) {
            if (modalSuccesRef.current) {
                !(modalSuccesRef.current.contains(e.target) || modalRef.current.contains(e.target)) && closeModal();
            } else {
                !modalRef.current.contains(e.target) && closeModal();
            }
        }
    }
    
    const onChange = (e) => {
        setValueText(e.target.value)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // PostTextService.addPageTab('talents')
        setPendingForm(true)
        setTimeout(() => {
            setSucces(true)
            setPendingForm(false)
        }, 1000);
    }
    
    if (!isModalVisible) {
        return null
    }

    return (
        <div className={style.ModalWrapper} onClick={(e) => bckgCloseModal(e)}>
            <div ref={modalRef} className={style.ModalWindow}>
                <Button addClass={style.CloseButton} onClick={() => closeModal()} >
                    <FontAwesomeIcon style={{color: '#fff'}} icon={faTimesCircle} />
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
                    <Button >
                        <span>Отправить отзыв</span>
                        {pendingForm && <Spin className={style.Spin} />}
                    </Button>
                </form>
            </div>
            <ModalSucces reference={modalSuccesRef} succes={succes} closeModal={closeModal}/>
        </div>
    );
};

export default ModalWindow;