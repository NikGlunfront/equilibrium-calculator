import React from 'react';
// import { useSelector } from 'react-redux';
import Content from '../components/Content/Content';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionSubtitle from '../components/Section/SectionSubtitle';
import SectionTitle from '../components/Section/SectionTitle';

const Home = () => {
    // const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <SectionTitle>Home page</SectionTitle>
                <SectionSubtitle>Home page subtitle here!</SectionSubtitle>
            </Section>
            <Section>
                <SectionBody>
                    HOME PAGE
                </SectionBody>
            </Section>
        </Content>
    );
};

export default Home;