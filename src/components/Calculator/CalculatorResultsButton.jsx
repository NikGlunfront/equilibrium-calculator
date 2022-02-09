import React from 'react';
import Button from '../UI/button/Button';

const CalculatorResultsButton = ({onClick, dataUiTexts}) => {
    return (
        <Button onClick={onClick}>{dataUiTexts.resultButton}</Button>
    );
};

export default CalculatorResultsButton;