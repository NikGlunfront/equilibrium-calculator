import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_CHARM } from '../data/charm';
import SectionTitle from '../components/Section/SectionTitle';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionBody from '../components/Section/SectionBody';

const Charm = () => {
    const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <SectionTitle>{DATA_CHARM.title[language].title}</SectionTitle>
                <SectionSubtitle>{DATA_CHARM.title[language].subtitle}</SectionSubtitle>
            </Section>
            <Section>
                <SectionBody>
                    <div className='text-row'>
                        {DATA_CHARM.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </SectionBody>
            </Section>
        </Content>
    );
};

export default Charm;