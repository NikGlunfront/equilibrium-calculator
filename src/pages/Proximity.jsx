import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Content/Content';
import Section from '../components/Section/Section';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_INTIMICY } from '../data/intimicy';
import SectionTitle from '../components/Section/SectionTitle';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionBody from '../components/Section/SectionBody';

const Proximity = () => {
    const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <SectionTitle>{DATA_INTIMICY.title[language].title}</SectionTitle>
                <SectionSubtitle>{DATA_INTIMICY.title[language].subtitle}</SectionSubtitle>
            </Section>
            <Section>
                <SectionBody>
                    <div className='text-row'>
                        {DATA_INTIMICY.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </SectionBody>
            </Section>
        </Content>
    );
};

export default Proximity;