import React from 'react';
import Container from '../Container/Container';
import style from './Section.module.css'

const Section = ({children, isFirst}) => {

    let subComponentList = Object.keys(Section);

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });


    return (
        <section className={isFirst ? style.PageSection + " " + style.FirstPageSection : style.PageSection}>
            <Container>
                {subComponents.map((component) => component)}
            </Container>
        </section>
    );
};

const Title = (props) => <div className={style.Title}>{props.children}</div>;
Section.Title = Title;

const SubTitle = (props) => <div className={style.SubTitle}>{props.children}</div>;
Section.SubTitle = SubTitle;

const Info = (props) => <div className={style.Info}>{props.children}</div>;
Section.Info = Info;

const Body = ({children}) => <div className={style.Body}>{children}</div>;
Section.Body = Body;

export default Section;
