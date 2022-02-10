import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS } from '../data/talents';
import { useActions } from '../hooks/useActions';
import Calculator from '../components/Calculator/Calculator';
import { DATA_TABLE } from '../data/Table';
import reactScrollToComponent from 'react-scroll-to-component';
import SectionTitle from '../components/Section/SectionTitle';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionBody from '../components/Section/SectionBody';
import SectionInfo from '../components/Section/SectionInfo';
import CalculatorResultsButton from '../components/Calculator/CalculatorResultsButton';
import CalculatorResultForm from '../components/Calculator/CalculatorResultForm';
import CalculatorInputsField from '../components/Calculator/CalculatorInputsField';
import { DATA_MAIN } from '../data/main';

const Talents = () => {
    const {language} = useSelector(state => state.language)
    const talents = useSelector(state => state.talents)
    const {setIsCalculatingTalents, setTalentsResults} = useActions();
    const dataPageTexts = DATA_TALENTS.title[language];
    const dataMain = DATA_MAIN.calc[language];
    const dataInputs = DATA_TALENTS.inputs[language];
    const dataUiTexts = DATA_TALENTS.ui[language];
    const tableTexts = DATA_TABLE.body[language]

    const yakor = 'talent-results';
      

    const calculateTalentValues = () => {
        setIsCalculatingTalents(true)
        reactScrollToComponent(document.getElementById(yakor),{
            align: 'top',
            duration: 700
        })
        setTimeout(() => {
            setTalentsResults()
            setIsCalculatingTalents(false)
        }, 1500)
        
    }

    return (
        <Content>
            <Section isFirst={true}>
                <SectionTitle>{dataPageTexts.title}</SectionTitle>
                <SectionSubtitle>{dataPageTexts.subtitle}</SectionSubtitle>
            </Section>

            <Section>
                <SectionBody>
                    <div className='text-row'>
                        {DATA_TALENTS.text.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </SectionBody>
            </Section>

            <Section>
                <SectionSubtitle>{dataMain.calculateText}</SectionSubtitle>
                <SectionInfo>{dataMain.info}</SectionInfo>
                <SectionBody>
                    <Calculator>
                        <CalculatorInputsField dataInputs={dataInputs} dataUiTexts={dataUiTexts} />
                        <CalculatorResultsButton onClick={() => calculateTalentValues()} dataUiTexts={dataUiTexts} />
                        <CalculatorResultForm scrollTo={yakor} dataType={talents} dataInputs={dataInputs} textTitle={tableTexts.title} textSubtitle={tableTexts.subtitle}/>
                    </Calculator>
                </SectionBody>
            </Section>
        </Content>
    );
};

export default Talents;