import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Section from '../components/Container/Section/Section';
import Content from '../components/Content/Content';
import ContentBox from '../components/ContentBox/ContentBox';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS } from '../data/talents';

const Talents = () => {
    const {language} = useSelector(state => state.language)

    return (
        <Content>
            <Section isFirst={true}>
                <Section.Title>{DATA_TALENTS.title[language].title}</Section.Title>
                <Section.SubTitle>{DATA_TALENTS.title[language].subtitle}</Section.SubTitle>
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
                <Section.SubTitle>Заполните поля в соответствии с информацией в ячейках</Section.SubTitle>
                <Section.Body>
                    <div style={{display: 'flex', flexWrap: 'wrap', width: 'fit-content', justifyContent: 'center'}}>
                        {DATA_TALENTS.inputs[language].map((card, index) =>
                            <ContentBox key={index} addStyles={{maxWidth: '300px', padding: '20px', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)"}}>
                                <Card imgSrc={card.img} description={card.text} />  
                            </ContentBox>    
                        )}
                    </div>
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Talents;