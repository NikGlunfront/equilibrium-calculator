import { Select } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { enMenuList, MenuList } from '../../utils/MenuList';
import style from './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
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
                <div className={style.Navbar}>
                    <ul className={style.NavbarList}>
                        {MenuList.map(link => 
                            <li 
                            key={link.key} 
                            className={location.pathname === link.navigateTo ? style.NavbarLink + ' ' + style.ActiveNavLink : style.NavbarLink}
                            >
                                <div onClick={() => handleNavigation(link.navigateTo)}>
                                    {link.text}
                                </div>
                            </li>    
                        )}
                    </ul>
                    <div className={style.NavbarLangs}>
                        <Select 
                            value={langSelected}
                            onChange={(e) => handleLanguageSelect(e)}
                            defaultValue="rus" 
                            style={{ width: 150 }}
                        >
                            <Select.Option value="rus">Русский</Select.Option>
                            <Select.Option value="eng">Английский</Select.Option>
                        </Select>
                    </div>
                </div>
                
                
                :
                <div className={style.Navbar}>
                    <ul className={style.NavbarList}>
                        {enMenuList.map(link => 
                            <li 
                            key={link.key} 
                            className={location.pathname === link.navigateTo ? style.NavbarLink + ' ' + style.ActiveNavLink : style.NavbarLink}
                            >
                                <div onClick={() => handleNavigation(link.navigateTo)}>
                                    {link.text}
                                </div>
                            </li>    
                        )}
                    </ul>
                    <div className={style.NavbarLangs}>
                        <Select 
                            value={langSelected}
                            onChange={(e) => handleLanguageSelect(e)}
                            defaultValue="rus" 
                            style={{ width: 150 }}
                        >
                            <Select.Option value="rus">Russian</Select.Option>
                            <Select.Option value="eng">English</Select.Option>
                        </Select>
                    </div>
                </div>
                
            }
            
        </>
    );
};

export default Navbar;