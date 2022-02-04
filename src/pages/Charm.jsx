import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Container/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_CHARM } from '../data/charm';

const Charm = () => {
    const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <Section.Title>{DATA_CHARM.title[language].title}</Section.Title>
                <Section.SubTitle>{DATA_CHARM.title[language].subtitle}</Section.SubTitle>
            </Section>
            <Section>
                <Section.Body>
                    <div className='text-row'>
                        {DATA_CHARM.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Charm;