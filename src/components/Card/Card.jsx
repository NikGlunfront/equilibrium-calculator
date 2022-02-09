import React from 'react';
import style from './Card.module.css';

const Card = ({children}) => {
    // let subComponentList = Object.keys(Card);

    // let subComponents = subComponentList.map((key) => {
    //     return React.Children.map(children, (child) =>
    //         child.type.name === key ? child : null
    //     );
    // });

    return (
        <div className={style.Wrapper}>
            {/* {subComponents.map((component) => component)} */}
            {children}
        </div>
    );
};

// const Image = ({imgSrc, description}) => 
//     <div className={style.ImgContainer}>
//         {imgSrc && <img src={imgSrc} alt={description} />}
//     </div>;
// Card.Image = Image;

// const InputBlock = ({data, resultText}) => 
//     <Input resultText={resultText} data={data} />;
// Card.InputBlock = InputBlock;

export default Card;