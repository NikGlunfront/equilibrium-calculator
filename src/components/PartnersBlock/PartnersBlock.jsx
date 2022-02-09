import React from 'react';
import { useSelector } from 'react-redux';
import { DATA_MAIN } from '../../data/main';
import Card from '../Card/Card';
import CardImage from '../Card/CardImage';
import CardInputBlock from '../Card/CardInputBlock';
import ContentBox from '../ContentBox/ContentBox';
import Section from '../Section/Section';
import SectionInfo from '../Section/SectionInfo';
import SectionSubtitle from '../Section/SectionSubtitle';

const PartnersBlock = () => {
    const {language} = useSelector(state => state.language)
    const dataMain = DATA_MAIN.ui[language]
    const partnerInput = DATA_MAIN.partnerInput[language]

    return (
        <Section>
            <SectionSubtitle>{dataMain.partnersTitle}</SectionSubtitle>
            <SectionInfo>{dataMain.partnersDescription}</SectionInfo>
            <ContentBox addStyles={{maxWidth: '300px', padding: '20px', margin: '20px auto', boxShadow: "0px 0px 20px rgba(88,92, 229, 0.15)"}}>
                <Card>
                    <CardImage imgSrc={partnerInput.img} description={partnerInput.text} />
                    <CardInputBlock data={partnerInput} />    
                </Card>  
            </ContentBox>
        </Section>
    );
};

export default PartnersBlock;