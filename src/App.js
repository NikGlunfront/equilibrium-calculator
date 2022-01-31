import React from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './css/App.css'


const App = () => {
    return (
        <div className='page-wrapper'>
            <Header>

            </Header>

            <AppRouter/>

            <Footer>
                
            </Footer>
        </div>
    );
};

export default App;
