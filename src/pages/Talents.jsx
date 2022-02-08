import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS } from '../data/talents';
import { useActions } from '../hooks/useActions';
import Calculator from '../components/Calculator/Calculator';
import { DATA_TABLE } from '../data/Table';
import { useEffect } from 'react';
import reactScrollToComponent from 'react-scroll-to-component';

const Talents = () => {
    const {language} = useSelector(state => state.language)
    const talents = useSelector(state => state.talents)
    const {setIsCalculatingTalents, setTalentsResults} = useActions();
    const dataPageTexts = DATA_TALENTS.title[language];
    const dataInputs = DATA_TALENTS.inputs[language];
    const dataUiTexts = DATA_TALENTS.ui[language];
    const tableTexts = DATA_TABLE.body[language]
      

    const calculateTalentValues = () => {
        setIsCalculatingTalents(true)
        reactScrollToComponent(document.getElementById('talentResults'),{
            align: 'top',
            duration: 700
        })
        console.log(talents)
        setTimeout(() => {
            setTalentsResults()
            setIsCalculatingTalents(false)
            console.log(talents)
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
                    <Calculator>
                        <Calculator.InputsField dataInputs={dataInputs} dataUiTexts={dataUiTexts} />
                        <Calculator.ResultButton onClick={() => calculateTalentValues(true)} dataUiTexts={dataUiTexts} />
                        <Calculator.ResultForm dataType={talents} dataInputs={dataInputs} textTitle={tableTexts.title} textSubtitle={tableTexts.subtitle}/>
                    </Calculator>
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Talents;