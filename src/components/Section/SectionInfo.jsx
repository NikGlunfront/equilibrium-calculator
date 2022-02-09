import React from 'react';
import style from './Section.module.css'

const SectionInfo = (props) => {
    return (
        <div className={style.Info}>{props.children}</div>
    );
};

export default SectionInfo;