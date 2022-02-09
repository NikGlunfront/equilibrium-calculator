import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_CHARM } from '../data/charm';
import SectionTitle from '../components/Section/SectionTitle';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionBody from '../components/Section/SectionBody';
import Calculator from '../components/Calculator/Calculator';
import SectionInfo from '../components/Section/SectionInfo';
import CalculatorInputsField from '../components/Calculator/CalculatorInputsField';
import { DATA_TALENTS } from '../data/talents';
import PartnersBlock from '../components/PartnersBlock/PartnersBlock';
import { useActions } from '../hooks/useActions';
import CalculatorResultsButton from '../components/Calculator/CalculatorResultsButton';
import CalculatorResultForm from '../components/Calculator/CalculatorResultForm';
import { DATA_TABLE } from '../data/Table';
import { DATA_INTIMICY } from '../data/intimicy';
import reactScrollToComponent from 'react-scroll-to-component';

const Proximity = () => {
    const {language} = useSelector(state => state.language)
    const {partners} = useSelector(state => state.partners)
    const intimacy = useSelector(state => state.intimacy)
    const {setIntimacyResults, setIsCalculatingIntimacy} = useActions()
    const dataPageTexts = DATA_TALENTS.title[language];
    const dataInputs = DATA_INTIMICY.inputs[language];
    const dataUiTexts = DATA_INTIMICY.ui[language];
    const tableTexts = DATA_TABLE.body[language];

    const yakor = 'intimacy-results';

    const calculateIntimacyValues = () => {
        setIsCalculatingIntimacy(true)
        reactScrollToComponent(document.getElementById(yakor),{
            align: 'top',
            duration: 700
        })
        setTimeout(() => {
            setIntimacyResults()
            setIsCalculatingIntimacy(false)
        }, 1500)
        
    }

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

            <PartnersBlock />

            {(partners > 0) &&
                <Section>
                    <SectionSubtitle>{dataPageTexts.calculateText}</SectionSubtitle>
                    <SectionInfo>{dataPageTexts.info}</SectionInfo>
                    <SectionBody>
                        <Calculator>
                            <CalculatorInputsField dataInputs={dataInputs} dataUiTexts={dataUiTexts} />
                            <CalculatorResultsButton onClick={() => calculateIntimacyValues()} dataUiTexts={dataUiTexts} />
                            <CalculatorResultForm dataType={intimacy} dataInputs={dataInputs} textTitle={tableTexts.title} textSubtitle={tableTexts.subtitle} scrollTo={yakor}/>
                        </Calculator>
                    </SectionBody>
                </Section>
            }
        </Content>
    );
};

export default Proximity;