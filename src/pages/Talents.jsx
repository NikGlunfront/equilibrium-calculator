import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../components/Content/Content';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import { DATA_TALENTS_TEXT } from '../data/talents';

const Talents = () => {
    const {language} = useSelector(state => state.language)

    return (
        <Content>
            <InfoBlock data={DATA_TALENTS_TEXT} /> 
        </Content>
    );
};

export default Talents;