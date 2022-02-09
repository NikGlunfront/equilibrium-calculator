import React from 'react';
import ResultsList from './ResultsList/ResultsList';
import ResultsRow from './ResultsRow/ResultsRow';
import style from './Table.module.css';

const TableBody = ({dataType, dataInputs}) => {
    return (
        <div className={style.Body}>
            <ResultsRow dataType={dataType} />
            <ResultsList dataType={dataType} dataInputs={dataInputs} />
        </div>
    );
};

export default TableBody;