import React from 'react';
import style from './Calculator.module.css';

const Calculator = ({children}) => {


    // let subComponentList = Object.keys(Calculator);

    // let subComponents = subComponentList.map((key) => {
    //     return React.Children.map(children, (child) =>
    //         child.type.name === key ? child : null
    //     );
    // });

    return (
        <div className={style.CalculatorBlock}>
            {/* {subComponents.map((component) => component)} */}
            {children}
        </div>
    );
};



// const InputsField = ({dataInputs, dataUiTexts}) => 
//     <div style={{display: 'flex', flexWrap: 'wrap', width: 'fit-content', justifyContent: 'center'}}>
//     {dataInputs.map(card =>
//         <ContentBox key={card.id} addStyles={{maxWidth: '300px', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)"}}>
//             <Card>
//                 <CardImage imgSrc={card.img} description={card.text} />
//                 <CardInputBlock resultText={dataUiTexts.inputText} data={card} />    
//             </Card>  
//         </ContentBox>    
//     )}
//     </div>
// Calculator.InputsField = InputsField;



// const ResultButton = ({onClick, dataUiTexts}) => 
//     <Button onClick={onClick}>{dataUiTexts.resultButton}</Button>
// Calculator.ResultButton = ResultButton;



// const ResultForm = ({dataType, dataInputs, textTitle, textSubtitle}) => 
//     <div id='talentResults'>
//         <ContentBox addStyles={{maxWidth: '100%', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)", margin: '40px auto'}}>
//             <Table>
//                 <TableTitle>{textTitle}</TableTitle>
//                 <TableDescription>{textSubtitle}</TableDescription>
//                 <TableDescription.Body dataType={dataType} dataInputs={dataInputs} />
//             </Table>
//         </ContentBox>
//     </div>
// Calculator.ResultForm = ResultForm;

export default Calculator;