import React from 'react';
import style from './Section.module.css'

const SectionBody = (props) => {
    return (
        <div className={style.Body}>{props.children}</div>
    );
};

export default SectionBody;