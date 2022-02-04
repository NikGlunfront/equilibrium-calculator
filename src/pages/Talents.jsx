import React from 'react';
import Section from '../components/Container/Section/Section';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS_TEXT } from '../data/talents';

const Talents = () => {

    return (
        <Content>
            <Section>
                <Section.Title>Расчет Талантов</Section.Title>
                <Section.SubTitle>Межсерверный рейтинг талантов (Богдан)</Section.SubTitle>
            </Section>
            <Section>
                <Section.Body>
                    <div className='text-row'>
                        {DATA_TALENTS_TEXT.map((item, index) => 
                            <InfoBlock key={index} data={item} />
                        )}
                    </div> 
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Talents;