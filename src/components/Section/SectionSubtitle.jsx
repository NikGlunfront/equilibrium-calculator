import React from 'react';
import style from './Section.module.css'

const SectionSubtitle = (props) => {
    return (
        <div className={style.SubTitle}>{props.children}</div>
    );
};

export default SectionSubtitle;