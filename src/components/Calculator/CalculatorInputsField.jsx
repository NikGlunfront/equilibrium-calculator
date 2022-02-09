import React from 'react';
import Card from '../Card/Card';
import CardImage from '../Card/CardImage';
import CardInputBlock from '../Card/CardInputBlock';
import ContentBox from '../ContentBox/ContentBox';

const CalculatorInputsField = ({dataInputs, dataUiTexts}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: 'fit-content', justifyContent: 'center'}}>
            {dataInputs.map(card =>
                <ContentBox key={card.id} addStyles={{maxWidth: '300px', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)"}}>
                    <Card>
                        <CardImage imgSrc={card.img} description={card.text} />
                        <CardInputBlock resultText={dataUiTexts.inputText} data={card} />    
                    </Card>  
                </ContentBox>    
            )}
        </div>
    );
};

export default CalculatorInputsField;