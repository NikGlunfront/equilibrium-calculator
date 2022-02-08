import React from 'react';
import ResultsList from './ResultsList/ResultsList';
import ResultsRow from './ResultsRow/ResultsRow';
import style from './Table.module.css';

const Table = ({children}) => {
    let subComponentList = Object.keys(Table);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });

    return (
        <div className={style.Table}>
            {subComponents.map((component) => component)}
        </div>
    );
};

const Title = ({children}) => 
    <div className={style.Title}>
        {children}
    </div>
Table.Title = Title;

const Description = ({children}) => 
    <div className={style.Description}>
        {children}
    </div>
Table.Description = Description;

const Body = ({dataType, dataInputs}) => 
    <div className={style.Body}>
        <ResultsRow dataType={dataType} />
        <ResultsList dataType={dataType} dataInputs={dataInputs} />
    </div>
Table.Body = Body;

export default Table;