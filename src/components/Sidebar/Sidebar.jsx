import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import style from './Sidebar.module.css'
import { DATA_LANGUAGES } from '../../data/LanguagesList';
import { useState } from 'react';
import { DATA_SIDEBAR } from '../../data/Sidebar';

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const language = useSelector(state => state.language.language)
    const {changeLanguageAction} = useActions()
    const [isVisibleLangsMobile, setIsVisibleLangsMobile] = useState(false);

    const setMobileLangsVisible = () => {
        if (isVisibleLangsMobile) {
            setIsVisibleLangsMobile(false)
        } else {
            setIsVisibleLangsMobile(true)
        }
    }

    const handleNavigation = (target) => {
        navigate(target)
    }

    const handleLanguageSelect = (lang) => {
        changeLanguageAction(lang)
        if (isVisibleLangsMobile) {
            setIsVisibleLangsMobile(false)
        }
    }

    return (
        <>
                
            <div className={style.ContentWrapper}>
                <ul className={style.Menu}>
                    {DATA_LANGUAGES[language].menuList.map(item=>
                        <li
                            key={item.key}
                            className={location.pathname === item.navigateTo ? style.Item + ' ' + style.ActiveItem : style.Item}
                            onClick={() => handleNavigation(item.navigateTo)}>
                            
                            <div className={style.ItemInner}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.text}</span>
                            </div>

                        </li> 
                    )}
                    <li
                        key={'langs'}
                        className={style.Item + " " + style.ItemLang}
                        onClick={() => setMobileLangsVisible()}>
                        
                        <div className={style.ItemInner}>
                            <FontAwesomeIcon icon={faLanguage} />
                            <span>{DATA_SIDEBAR[language].lang}</span>
                            <div 
                                className={isVisibleLangsMobile ? style.MobileLangsItem + " " + style.ActiveMobileLangsItem : style.MobileLangsItem}>
                                {Object.values(DATA_LANGUAGES).map(lang => 
                                    <div
                                        key={lang.type}
                                        onClick={() => handleLanguageSelect(lang.type)}
                                        className={lang.type === language ? style.LangItem + ' ' + style.ActiveLangItem : style.LangItem}>
                                            {lang.text}
                                    </div>
                                )}
                            </div>
                        </div>

                    </li> 
                </ul>
                <div className={style.Langs}>
                    <span>{DATA_SIDEBAR[language].choose}</span>
                    <FontAwesomeIcon icon={faLanguage} style={{fontSize: '30px', color: '#9BAAD3'}}/>

                    <div className={style.LangItemsBox}>
                        {Object.values(DATA_LANGUAGES).map(lang => 
                            <div
                                key={lang.type}
                                onClick={() => handleLanguageSelect(lang.type)}
                                className={lang.type === language ? style.LangItem + ' ' + style.ActiveLangItem : style.LangItem}>
                                    {lang.text}
                            </div>    
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;