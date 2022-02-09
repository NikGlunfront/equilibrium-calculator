import React from 'react';
import style from './Table.module.css';

const TableTitle = ({children}) => {
    return (
        <div className={style.Title}>
            {children}
        </div>
    );
};

export default TableTitle;