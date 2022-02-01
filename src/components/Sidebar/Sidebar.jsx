import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { enMenuList, MenuList } from '../../utils/MenuList';
import style from './Sidebar.module.css'

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [langSelected, setLangSelected] = useState('rus');

    const handleNavigation = (target) => {
        navigate(target)
    }

    const handleLanguageSelect = (value) => {
        setLangSelected(value)
    }

    return (
        <>
            {langSelected === 'rus'
                ?
                <div className={style.ContentWrapper}>
                    <ul className={style.Menu}>
                        {MenuList.map(item => 
                            <li
                                key={item.key}
                                className={location.pathname === item.navigateTo ? style.Item + ' ' + style.ActiveItem : style.Item}
                                onClick={() => handleNavigation(item.navigateTo)}>
                                
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>

                            </li>    
                        )}
                    </ul>
                    <div className={style.Langs}>
                        <span>Выбранный язык:</span>
                        <FontAwesomeIcon icon={faLanguage} style={{fontSize: '30px', color: '#9BAAD3'}}/>
                        <div className={style.LangItemsBox}>
                            <div 
                                onClick={() => handleLanguageSelect('rus')}
                                className={style.LangItem + ' ' + style.ActiveLangItem}>
                                    Русский
                            </div>
                            <div 
                                onClick={() => handleLanguageSelect('en')}
                                className={style.LangItem}>
                                    Английский
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={style.ContentWrapper}>
                    <ul className={style.Menu}>
                        {enMenuList.map(item => 
                            <li
                                key={item.key}
                                className={location.pathname === item.navigateTo ? style.Item + ' ' + style.ActiveItem : style.Item}
                                onClick={() => handleNavigation(item.navigateTo)}>
                                
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>

                            </li>    
                        )}
                    </ul>
                    <div className={style.Langs}>
                        <span>Choosed language:</span>
                        <FontAwesomeIcon icon={faLanguage} style={{fontSize: '30px', color: '#9BAAD3'}}/>
                        <div className={style.LangItemsBox}>
                            <div 
                                onClick={() => handleLanguageSelect('rus')}
                                className={style.LangItem}>
                                    Russian
                            </div>
                            <div 
                                onClick={() => handleLanguageSelect('en')}
                                className={style.LangItem + ' ' + style.ActiveLangItem}>
                                    English
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </>
    );
};

export default Sidebar;