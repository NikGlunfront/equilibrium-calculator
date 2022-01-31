import React from 'react';
import Container from '../Container/Container';

const Content = ({children}) => {
    return (
        <main>
            <Container>
                {children}
            </Container>
        </main>
    );
};

export default Content;