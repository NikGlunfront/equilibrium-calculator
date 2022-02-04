import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Content/Content';
import Section from '../components/Container/Section/Section';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_INTIMICY } from '../data/intimicy';

const Proximity = () => {
    const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <Section.Title>{DATA_INTIMICY.title[language].title}</Section.Title>
                <Section.SubTitle>{DATA_INTIMICY.title[language].subtitle}</Section.SubTitle>
            </Section>
            <Section>
                <Section.Body>
                    <div className='text-row'>
                        {DATA_INTIMICY.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Proximity;