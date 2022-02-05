import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Section from '../components/Section/Section';
import Content from '../components/Content/Content';
import ContentBox from '../components/ContentBox/ContentBox';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS } from '../data/talents';
import { useActions } from '../hooks/useActions';
import Button from '../components/UI/button/Button';

const Talents = () => {
    const {language} = useSelector(state => state.language)
    const {setIsCalculatingTalents} = useActions();
    const dataPageTexts = DATA_TALENTS.title[language];
    const dataInputsTexts = DATA_TALENTS.inputs[language];
    const dataUiTexts = DATA_TALENTS.ui[language];

    const calculateTalentValues = () => {
        setIsCalculatingTalents(true)
        setTimeout(() => {
            setIsCalculatingTalents(false)
        }, 1500)
    }

    return (
        <Content>
            <Section isFirst={true}>
                <Section.Title>{dataPageTexts.title}</Section.Title>
                <Section.SubTitle>{dataPageTexts.subtitle}</Section.SubTitle>
            </Section>

            <Section>
                <Section.Body>
                    <div className='text-row'>
                        {DATA_TALENTS.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </Section.Body>
            </Section>

            <Section>
                <Section.SubTitle>{dataPageTexts.calculateText}</Section.SubTitle>
                <Section.Info>{dataPageTexts.info}</Section.Info>
                <Section.Body>
                    <div style={{display: 'flex', flexWrap: 'wrap', width: 'fit-content', justifyContent: 'center'}}>
                        {dataInputsTexts.map(card =>
                            <ContentBox key={card.id} addStyles={{maxWidth: '300px', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)"}}>
                                <Card>
                                    <Card.Image imgSrc={card.img} description={card.text} />
                                    <Card.InputBlock resultText={dataUiTexts.inputText} data={card} />    
                                </Card>  
                            </ContentBox>    
                        )}
                    </div>
                    <Button onClick={() => calculateTalentValues(true)}>{dataUiTexts.resultButton}</Button>
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Talents;