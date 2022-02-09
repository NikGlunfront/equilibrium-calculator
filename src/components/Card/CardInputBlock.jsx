import React from 'react';
import Input from '../UI/Input/Input';

const CardInputBlock = ({data, resultText}) => {
    return (
        <Input resultText={resultText} data={data} />
    );
};

export default CardInputBlock;