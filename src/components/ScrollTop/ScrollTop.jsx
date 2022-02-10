import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

const ScrollTop = ({children}) => {
    const location = useLocation()
    const {changePartnerAmountAction} = useActions()

    useEffect(() => {
        changePartnerAmountAction(0)
        window.scrollTo(0, 0)
    },[location])

    return (
        <>
            {children}
        </>
    );
};

export default ScrollTop;