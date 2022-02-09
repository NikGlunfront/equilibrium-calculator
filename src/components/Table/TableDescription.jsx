import React from 'react';
import style from './Table.module.css';

const TableDescription = ({children}) => {
    return (
        <div className={style.Description}>
            {children}
        </div>
    );
};

export default TableDescription;