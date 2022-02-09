import React from 'react';
import style from './Section.module.css'

const SectionTitle = (props) => {
    return (
        <div className={style.Title}>{props.children}</div>
    );
};

export default SectionTitle;