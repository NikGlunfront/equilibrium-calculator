import React from 'react';
import style from './ContentBox.module.css';

const ContentBox = ({children, addStyles}) => {
    return (
        <div className={style.Wrapper} style={addStyles}>
            {children}
        </div>
    );
};

export default ContentBox;