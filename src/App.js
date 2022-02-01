import React from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import your fontawesome library
import './UI/FontAwesome/fontawesome';
import './css/App.css'
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
    return (
        <div className='page-wrapper'>
            
            <Sidebar />

            <AppRouter/>

            <Footer />
        </div>
    );
};

export default App;
