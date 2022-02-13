import React, { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
// import your fontawesome library
import './UI/FontAwesome/fontawesome';
import './css/App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ModalWindow from './components/Modal/ModalWindow';
import { useSelector } from 'react-redux';


const App = () => {
    const isModalVisible = useSelector(state => state.modals.isModalVisible)

    useEffect(() => {
        if (isModalVisible) {
            document.querySelector('body').classList.add('_locked')
        } else {
            document.querySelector('body').classList.remove('_locked')
        }
    }, [isModalVisible])
    
    return (
        <div className='page-wrapper'>
            <Header />
            
            <Sidebar />

            <ModalWindow />

            <AppRouter/>

            <Footer />
        </div>
    );
};

export default App;
