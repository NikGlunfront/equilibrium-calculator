import React from 'react';
// import { useSelector } from 'react-redux';
import Content from '../components/Content/Content';
import Section from '../components/Section/Section';

const Home = () => {
    // const {language} = useSelector(state => state.language)
    return (
        <Content>
            <Section isFirst={true}>
                <Section.Title>Home page</Section.Title>
                <Section.SubTitle>Home page subtitle here!</Section.SubTitle>
            </Section>
            <Section>
                <Section.Body>
                    HOME PAGE
                </Section.Body>
            </Section>
        </Content>
    );
};

export default Home;